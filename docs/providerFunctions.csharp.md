# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-time.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### TimeProviderFunctions <a name="TimeProviderFunctions" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions"></a>

Provider-defined functions of the time provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Time;

new TimeProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

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

```csharp
private IResolvable DurationParse(string Duration)
```

Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration.

###### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse.parameter.duration"></a>

- *Type:* string

Go time package duration string to parse.

---

##### `Rfc3339Parse` <a name="Rfc3339Parse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse"></a>

```csharp
private IResolvable Rfc3339Parse(string Timestamp)
```

Given an RFC3339 timestamp string, will parse and return an object representation of that date and time.

###### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse.parameter.timestamp"></a>

- *Type:* string

RFC3339 timestamp string to parse.

---

##### `UnixTimestampParse` <a name="UnixTimestampParse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse"></a>

```csharp
private IResolvable UnixTimestampParse(double UnixTimestamp)
```

Given a unix timestamp integer, will parse and return an object representation of that date and time.

A unix timestamp is the number of seconds elapsed since January 1, 1970 UTC.

###### `UnixTimestamp`<sup>Required</sup> <a name="UnixTimestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse.parameter.unixTimestamp"></a>

- *Type:* double

Unix Timestamp integer to parse.

---





