# Java API reference

Everything lives in the package `lol.kishin.keyshin`. All methods are static and **blocking** (8 second timeout), so don't call them on a main, UI or game thread. See [Guides](?p=keyshin&page=java-guides) for async examples.

## The `url` argument

Every method takes the address of your KeyShin server. Both forms work:

```text
https://licenses.kishin.lol
https://licenses.kishin.lol/api/v1/validate
```

## KeyShinClient.validate

```java
boolean validate(String url, String license, String product)
boolean validate(String url, String license, String product, String fingerprint, String label)
```

Returns `true` only if the license is valid. It **never throws** for network or server problems; those return `false`.

| Parameter     | Required | Meaning |
| ------------- | -------- | ------- |
| `url`         | yes | Your KeyShin server |
| `license`     | yes | The key the customer entered. Case and spaces don't matter |
| `product`     | yes | The product's slug |
| `fingerprint` | no  | A stable id for this machine. With it, the machine takes one of the license's activation slots |
| `label`       | no  | A readable name shown in the dashboard, like a hostname |

Passing `null` or a blank string for `url`, `license` or `product` throws `IllegalArgumentException`, because that's a bug in your code rather than a bad license.

## KeyShinClient.check

```java
ValidationResult check(String url, String license, String product) throws KeyShinException
ValidationResult check(String url, String license, String product, String fingerprint, String label) throws KeyShinException
```

Same request as `validate`, but returns the full answer. It throws `KeyShinException` when the license **couldn't be checked**, which is different from the license being invalid.

```java
try {
    ValidationResult result = KeyShinClient.check(url, key, "discord-bot-pro");
    if (result.valid()) {
        // start normally
    } else {
        System.out.println(result.message()); // safe to show to the customer
    }
} catch (KeyShinException e) {
    // server down, no internet, or a server error
}
```

## ValidationResult

A Java record with these fields:

| Method             | Type      | Meaning |
| ------------------ | --------- | ------- |
| `valid()`          | `boolean` | `true` if the key works for this product (and machine) |
| `code()`           | `String`  | Why, as one of the codes below |
| `message()`        | `String`  | Explanation written for customers. Safe to show directly |
| `product()`        | `String`  | The product slug, may be `null` |
| `expiresAt()`      | `String`  | ISO-8601 expiry time, or `null` if the license never expires |
| `maxActivations()` | `Integer` | How many machines may use the key, or `null` |
| `activations()`    | `Integer` | How many machines use it now, or `null` |
| `newActivation()`  | `boolean` | `true` if this request registered a new machine |

### Result codes

The codes are also available as constants, e.g. `ValidationResult.EXPIRED`.

| Code               | Constant           | Meaning |
| ------------------ | ------------------ | ------- |
| `valid`            | `VALID`            | The key works |
| `not_found`        | `NOT_FOUND`        | No such key |
| `wrong_product`    | `WRONG_PRODUCT`    | The key exists, but for another product |
| `revoked`          | `REVOKED`          | The key was revoked in the dashboard |
| `expired`          | `EXPIRED`          | Past its expiry date |
| `activation_limit` | `ACTIVATION_LIMIT` | All machine slots are taken by other machines |

## KeyShinException

Thrown by `check` when no answer could be obtained.

| Method             | Meaning |
| ------------------ | ------- |
| `getMessage()`     | What went wrong |
| `getStatusCode()`  | The HTTP status (e.g. `502`), or `-1` if the server couldn't be reached at all |
| `getServerError()` | The `error` text the server sent with a `400`, or `null` |

A `400` means the request was malformed. A `502` means KeyShin couldn't reach its database. Neither means the license is invalid.
