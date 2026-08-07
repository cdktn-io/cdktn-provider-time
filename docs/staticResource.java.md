# `staticResource` Submodule <a name="`staticResource` Submodule" id="@cdktn/provider-time.staticResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticResource <a name="StaticResource" id="@cdktn/provider-time.staticResource.StaticResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static time_static}.

#### Initializers <a name="Initializers" id="@cdktn/provider-time.staticResource.StaticResource.Initializer"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResource;

StaticResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .rfc3339(java.lang.String)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.rfc3339"></a>

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static#rfc3339 StaticResource#rfc3339}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-time.staticResource.StaticResource.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static#triggers StaticResource#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.resetRfc3339">resetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-time.staticResource.StaticResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-time.staticResource.StaticResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-time.staticResource.StaticResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-time.staticResource.StaticResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-time.staticResource.StaticResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-time.staticResource.StaticResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-time.staticResource.StaticResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-time.staticResource.StaticResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-time.staticResource.StaticResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-time.staticResource.StaticResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-time.staticResource.StaticResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-time.staticResource.StaticResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-time.staticResource.StaticResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-time.staticResource.StaticResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-time.staticResource.StaticResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-time.staticResource.StaticResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-time.staticResource.StaticResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-time.staticResource.StaticResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-time.staticResource.StaticResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-time.staticResource.StaticResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-time.staticResource.StaticResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-time.staticResource.StaticResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-time.staticResource.StaticResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-time.staticResource.StaticResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-time.staticResource.StaticResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-time.staticResource.StaticResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-time.staticResource.StaticResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRfc3339` <a name="resetRfc3339" id="@cdktn/provider-time.staticResource.StaticResource.resetRfc3339"></a>

```java
public void resetRfc3339()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktn/provider-time.staticResource.StaticResource.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StaticResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-time.staticResource.StaticResource.isConstruct"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResource;

StaticResource.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-time.staticResource.StaticResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-time.staticResource.StaticResource.isTerraformElement"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResource;

StaticResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-time.staticResource.StaticResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-time.staticResource.StaticResource.isTerraformResource"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResource;

StaticResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-time.staticResource.StaticResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResource;

StaticResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StaticResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StaticResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StaticResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StaticResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-time.staticResource.StaticResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StaticResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.second">second</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.unix">unix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.rfc3339Input">rfc3339Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-time.staticResource.StaticResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-time.staticResource.StaticResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-time.staticResource.StaticResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-time.staticResource.StaticResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-time.staticResource.StaticResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-time.staticResource.StaticResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-time.staticResource.StaticResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-time.staticResource.StaticResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-time.staticResource.StaticResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-time.staticResource.StaticResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-time.staticResource.StaticResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-time.staticResource.StaticResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-time.staticResource.StaticResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-time.staticResource.StaticResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-time.staticResource.StaticResource.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-time.staticResource.StaticResource.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-time.staticResource.StaticResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktn/provider-time.staticResource.StaticResource.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-time.staticResource.StaticResource.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktn/provider-time.staticResource.StaticResource.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktn/provider-time.staticResource.StaticResource.property.unix"></a>

```java
public java.lang.Number getUnix();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-time.staticResource.StaticResource.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `rfc3339Input`<sup>Optional</sup> <a name="rfc3339Input" id="@cdktn/provider-time.staticResource.StaticResource.property.rfc3339Input"></a>

```java
public java.lang.String getRfc3339Input();
```

- *Type:* java.lang.String

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktn/provider-time.staticResource.StaticResource.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktn/provider-time.staticResource.StaticResource.property.rfc3339"></a>

```java
public java.lang.String getRfc3339();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-time.staticResource.StaticResource.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-time.staticResource.StaticResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StaticResourceConfig <a name="StaticResourceConfig" id="@cdktn/provider-time.staticResource.StaticResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-time.staticResource.StaticResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.time.static_resource.StaticResourceConfig;

StaticResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .rfc3339(java.lang.String)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktn/provider-time.staticResource.StaticResourceConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.rfc3339"></a>

```java
public java.lang.String getRfc3339();
```

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static#rfc3339 StaticResource#rfc3339}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-time.staticResource.StaticResourceConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.14.0/docs/resources/static#triggers StaticResource#triggers}

---



