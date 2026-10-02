# Java client

**keyshin-java** is the official Java library for KeyShin. It checks a license key with one line of code, so your plugin, bot or app doesn't have to talk to the API by hand.

- Java 17 or newer
- No dependencies, so it's easy to shade into a plugin
- Source: [kishin-dev/keyshin-java](https://github.com/kishin-dev/keyshin-java)

## Installation

The library is published through [JitPack](https://jitpack.io/#kishin-dev/keyshin-java).

### Maven

Add the JitPack repository and the dependency to your `pom.xml`:

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.kishin-dev</groupId>
        <artifactId>keyshin-java</artifactId>
        <version>v1.0.0</version>
    </dependency>
</dependencies>
```

### Gradle (Groovy)

```groovy
repositories {
    mavenCentral()
    maven { url 'https://jitpack.io' }
}

dependencies {
    implementation 'com.github.kishin-dev:keyshin-java:v1.0.0'
}
```

### Gradle (Kotlin DSL)

```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://jitpack.io") }
}

dependencies {
    implementation("com.github.kishin-dev:keyshin-java:v1.0.0")
}
```

### Plain jar

Download `keyshin-java-1.0.0.jar` from the [GitHub release](https://github.com/kishin-dev/keyshin-java/releases/tag/v1.0.0) and add it to your classpath.

## Quick start

```java
import lol.kishin.keyshin.KeyShinClient;

boolean valid = KeyShinClient.validate(
        "https://licenses.kishin.lol",   // your KeyShin server
        "DBOT-VNHG-QX4Z-LEXA-ZJ74",      // the key the customer entered
        "discord-bot-pro"                // your product's slug
);

if (!valid) {
    System.out.println("Invalid license.");
}
```

`validate` returns `true` only when KeyShin says the key is valid. Anything else returns `false`, including a network error.

The **product** is the product's **slug** from the dashboard (e.g. `discord-bot-pro`), not its display name.

## Next steps

- [API reference](?p=keyshin&page=java-api): every method, the result fields and the error codes
- [Guides](?p=keyshin&page=java-guides): machine activations, Minecraft plugins, offline grace periods
