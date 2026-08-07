/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the time provider.
*/
export class TimeProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Given a [Go duration string](https://pkg.go.dev/time#ParseDuration), will parse and return an object representation of that duration.
  * @param {string} duration - Go time package duration string to parse
  * @returns {object}
  */
  public durationParse(duration: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "duration_parse", [duration]);
  }

  /**
  * Given an RFC3339 timestamp string, will parse and return an object representation of that date and time.
  * @param {string} timestamp - RFC3339 timestamp string to parse
  * @returns {object}
  */
  public rfc3339Parse(timestamp: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "rfc3339_parse", [timestamp]);
  }

  /**
  * Given a unix timestamp integer, will parse and return an object representation of that date and time. A unix timestamp is the number of seconds elapsed since January 1, 1970 UTC.
  * @param {number} unixTimestamp - Unix Timestamp integer to parse
  * @returns {object}
  */
  public unixTimestampParse(unixTimestamp: number): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "unix_timestamp_parse", [unixTimestamp]);
  }
}
