# Java guides

Practical recipes for using [keyshin-java](?p=keyshin&page=java-client) in real projects.

## Machine activations

A license can be limited to a number of machines. To take part in that limit, send a **fingerprint**: an id that stays the same on one machine.

A simple, reliable approach for servers and bots is to generate a random id once and store it in your data folder:

```java
import java.nio.file.*;
import java.util.UUID;

static String machineId(Path dataFolder) throws Exception {
    Path file = dataFolder.resolve("machine-id");
    if (Files.exists(file)) {
        return Files.readString(file).trim();
    }
    String id = UUID.randomUUID().toString();
    Files.createDirectories(dataFolder);
    Files.writeString(file, id);
    return id;
}
```

Then pass it, plus a readable label for your dashboard:

```java
String fingerprint = machineId(dataFolder);
String label = java.net.InetAddress.getLocalHost().getHostName();

boolean valid = KeyShinClient.validate(url, key, "my-product", fingerprint, label);
```

If a customer moves to a new machine, remove the old one from the license in the dashboard to free the slot.

Without a fingerprint the key is still checked, but no machine is recorded and the limit isn't applied.

## Running the check in the background

The client waits for the server (up to 8 seconds), so run it off your main thread:

```java
import java.util.concurrent.CompletableFuture;

CompletableFuture
        .supplyAsync(() -> KeyShinClient.validate(url, key, "my-product"))
        .thenAccept(valid -> {
            if (!valid) {
                System.err.println("Invalid license, shutting down.");
                System.exit(1);
            }
        });
```

## Minecraft plugins (Spigot / Paper)

Check the license asynchronously on enable, and disable the plugin on the main thread if the key is invalid:

```java
import lol.kishin.keyshin.KeyShinClient;
import lol.kishin.keyshin.KeyShinException;
import lol.kishin.keyshin.ValidationResult;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public final class MyPlugin extends JavaPlugin {

    private static final String KEYSHIN_URL = "https://licenses.kishin.lol";
    private static final String PRODUCT = "my-plugin";

    @Override
    public void onEnable() {
        saveDefaultConfig();
        String key = getConfig().getString("license-key", "");

        Bukkit.getScheduler().runTaskAsynchronously(this, () -> {
            try {
                ValidationResult result = KeyShinClient.check(KEYSHIN_URL, key, PRODUCT);
                if (!result.valid()) {
                    getLogger().severe("License: " + result.message());
                    Bukkit.getScheduler().runTask(this,
                            () -> getServer().getPluginManager().disablePlugin(this));
                }
            } catch (KeyShinException e) {
                getLogger().warning("Couldn't check the license right now: " + e.getMessage());
            }
        });
    }
}
```

### Shading the library into your plugin

The server doesn't download JitPack libraries for you, so bundle keyshin-java inside your plugin jar. Relocate it so it can't clash with another plugin using a different version.

**Maven**: add the Shade plugin:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>3.5.3</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals><goal>shade</goal></goals>
            <configuration>
                <relocations>
                    <relocation>
                        <pattern>lol.kishin.keyshin</pattern>
                        <shadedPattern>com.example.myplugin.libs.keyshin</shadedPattern>
                    </relocation>
                </relocations>
            </configuration>
        </execution>
    </executions>
</plugin>
```

**Gradle**: use the Shadow plugin (check its page for the newest version):

```groovy
plugins {
    id 'java'
    id 'com.gradleup.shadow' version '8.3.5'
}

shadowJar {
    relocate 'lol.kishin.keyshin', 'com.example.myplugin.libs.keyshin'
}
```

Build with `./gradlew shadowJar` and use the jar it produces.

## Surviving outages (grace period)

A short KeyShin outage, or the customer's internet dropping, shouldn't stop your project. Remember when the last successful check happened, and only refuse to run when the server **says** the key is invalid:

```java
import java.time.Duration;
import java.time.Instant;

Instant lastGoodCheck = loadLastGoodCheck(); // from a file, may be null
Duration grace = Duration.ofHours(24);

try {
    ValidationResult result = KeyShinClient.check(url, key, "my-product");
    if (result.valid()) {
        saveLastGoodCheck(Instant.now());
        // start normally
    } else {
        // the server answered: the key really is invalid
        stop(result.message());
    }
} catch (KeyShinException e) {
    // couldn't check: allow it if the last good check is recent enough
    boolean withinGrace = lastGoodCheck != null
            && lastGoodCheck.plus(grace).isAfter(Instant.now());
    if (!withinGrace) {
        stop("Couldn't verify your license. Check your internet connection.");
    }
}
```

`loadLastGoodCheck`, `saveLastGoodCheck` and `stop` are yours to write, e.g. storing the timestamp in a small file in your data folder.
