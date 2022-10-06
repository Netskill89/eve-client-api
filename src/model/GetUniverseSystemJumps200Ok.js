/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.12
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetUniverseSystemJumps200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseSystemJumps200Ok model module.
   * @module model/GetUniverseSystemJumps200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetUniverseSystemJumps200Ok</code>.
   * 200 ok object
   * @alias module:model/GetUniverseSystemJumps200Ok
   * @class
   * @param ship_jumps {Number} ship_jumps integer
   * @param system_id {Number} system_id integer
   */
  var exports = function(ship_jumps, system_id) {
    this.ship_jumps = ship_jumps;
    this.system_id = system_id;
  };

  /**
   * Constructs a <code>GetUniverseSystemJumps200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSystemJumps200Ok} obj Optional instance to populate.
   * @return {module:model/GetUniverseSystemJumps200Ok} The populated <code>GetUniverseSystemJumps200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ship_jumps'))
        obj.ship_jumps = ApiClient.convertToType(data['ship_jumps'], 'Number');
      if (data.hasOwnProperty('system_id'))
        obj.system_id = ApiClient.convertToType(data['system_id'], 'Number');
    }
    return obj;
  }

  /**
   * ship_jumps integer
   * @member {Number} ship_jumps
   */
  exports.prototype.ship_jumps = undefined;

  /**
   * system_id integer
   * @member {Number} system_id
   */
  exports.prototype.system_id = undefined;


  return exports;

}));