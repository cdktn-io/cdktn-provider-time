# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-time.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### TimeProviderFunctions <a name="TimeProviderFunctions" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions"></a>

Provider-defined functions of the time provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer"></a>

```python
from cdktn_provider_time import provider_functions

providerFunctions.TimeProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse">duration_parse</a></code> | Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration. |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse">rfc3339_parse</a></code> | Given an RFC3339 timestamp string, will parse and return an object representation of that date and time. |
| <code><a href="#@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse">unix_timestamp_parse</a></code> | Given a unix timestamp integer, will parse and return an object representation of that date and time. |

---

##### `duration_parse` <a name="duration_parse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse"></a>

```python
def duration_parse(
  duration: str
) -> IResolvable
```

Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration.

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.durationParse.parameter.duration"></a>

- *Type:* str

Go time package duration string to parse.

---

##### `rfc3339_parse` <a name="rfc3339_parse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse"></a>

```python
def rfc3339_parse(
  timestamp: str
) -> IResolvable
```

Given an RFC3339 timestamp string, will parse and return an object representation of that date and time.

###### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.rfc3339Parse.parameter.timestamp"></a>

- *Type:* str

RFC3339 timestamp string to parse.

---

##### `unix_timestamp_parse` <a name="unix_timestamp_parse" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse"></a>

```python
def unix_timestamp_parse(
  unix_timestamp: typing.Union[int, float]
) -> IResolvable
```

Given a unix timestamp integer, will parse and return an object representation of that date and time.

A unix timestamp is the number of seconds elapsed since January 1, 1970 UTC.

###### `unix_timestamp`<sup>Required</sup> <a name="unix_timestamp" id="@cdktn/provider-time.providerFunctions.TimeProviderFunctions.unixTimestampParse.parameter.unixTimestamp"></a>

- *Type:* typing.Union[int, float]

Unix Timestamp integer to parse.

---





