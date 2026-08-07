# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-time.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### TimeProviderFunctions <a name="TimeProviderFunctions" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions"></a>

Provider-defined functions of the time provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-time-go/time/v13/providerfunctions"

providerfunctions.NewTimeProviderFunctions(providerLocalName *string) TimeProviderFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>*string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* *string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse">DurationParse</a></code> | Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration. |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse">Rfc3339Parse</a></code> | Given an RFC3339 timestamp string, will parse and return an object representation of that date and time. |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse">UnixTimestampParse</a></code> | Given a unix timestamp integer, will parse and return an object representation of that date and time. |

---

##### `DurationParse` <a name="DurationParse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse"></a>

```go
func DurationParse(duration *string) IResolvable
```

Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration.

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse.parameter.duration"></a>

- *Type:* *string

Go time package duration string to parse.

---

##### `Rfc3339Parse` <a name="Rfc3339Parse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse"></a>

```go
func Rfc3339Parse(timestamp *string) IResolvable
```

Given an RFC3339 timestamp string, will parse and return an object representation of that date and time.

###### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse.parameter.timestamp"></a>

- *Type:* *string

RFC3339 timestamp string to parse.

---

##### `UnixTimestampParse` <a name="UnixTimestampParse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse"></a>

```go
func UnixTimestampParse(unixTimestamp *f64) IResolvable
```

Given a unix timestamp integer, will parse and return an object representation of that date and time.

A unix timestamp is the number of seconds elapsed since January 1, 1970 UTC.

###### `unixTimestamp`<sup>Required</sup> <a name="unixTimestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse.parameter.unixTimestamp"></a>

- *Type:* *f64

Unix Timestamp integer to parse.

---





