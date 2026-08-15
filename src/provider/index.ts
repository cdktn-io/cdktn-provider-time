/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/time/0.14.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TimeProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.14.1/docs#alias TimeProvider#alias}
  */
  readonly alias?: string;
}

import { TimeProviderFunctions } from '../provider-functions/index';
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.14.1/docs time}
*/
export class TimeProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TimeProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimeProvider to import
  * @param importFromId The id of the existing TimeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.14.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.14.1/docs time} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TimeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time',
      terraformGeneratorMetadata: {
        providerName: 'time',
        providerVersion: '0.14.1',
        providerVersionConstraint: '~> 0.7'
      },
      terraformProviderSource: 'hashicorp/time'
    });
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // ==========================
  // PROVIDER-DEFINED FUNCTIONS
  // ==========================
  private _functions?: TimeProviderFunctions;

  /**
  * Provider-defined functions of the time provider.
  */
  public get functions(): TimeProviderFunctions {
    if (!this._functions) {
      this._functions = new TimeProviderFunctions(this.terraformResourceType);
    }
    return this._functions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktn.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
