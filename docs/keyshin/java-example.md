# Java plugin example

Kishin plugins are written in Java for Paper, so here is a starting point you can adapt. It uses only the JDK's HTTP client and Gson, which Paper already ships with.

> **Note:** this is an example snippet, not an official library. Adjust the product slug, the fingerprint and the caching to your plugin.

```java
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public final class License {

    private static final URI ENDPOINT = URI.create("https://licenses.kishin.lol/api/v1/validate");
    private static final HttpClient HTTP = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(8))
            .build();

    public enum Result { VALID, INVALID, UNREACHABLE }

    /** Checks a key. Run this off the main server thread. */
    public static Result check(String key, String fingerprint, String label) {
        JsonObject body = new JsonObject();
        body.addProperty("key", key);
        body.addProperty("product", "my-product-slug");
        body.addProperty("fingerprint", fingerprint);
        body.addProperty("label", label);

        HttpRequest request = HttpRequest.newBuilder(ENDPOINT)
                .timeout(Duration.ofSeconds(8))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body.toString()))
                .build();

        try {
            HttpResponse<String> res = HTTP.send(request, HttpResponse.BodyHandlers.ofString());
            if (res.statusCode() != 200) return Result.UNREACHABLE;   // 400 / 502: couldn't check
            JsonObject json = JsonParser.parseString(res.body()).getAsJsonObject();
            return json.get("valid").getAsBoolean() ? Result.VALID : Result.INVALID;
        } catch (Exception e) {
            return Result.UNREACHABLE;                                 // network problem: couldn't check
        }
    }
}
```

## Using it

Call `License.check(...)` from an async task in `onEnable`:

- `VALID` - run normally and remember the time of this success.
- `INVALID` - show the `message` from the response to the owner and disable the plugin.
- `UNREACHABLE` - keep running if the last success is recent (for example under 24 hours), otherwise disable.

## Choosing a fingerprint

The fingerprint must stay the same on one machine and differ between machines. A hash of the machine's hostname plus a random ID stored in the plugin's data folder works well. Don't use the server's IP address: it can change without the machine changing.
