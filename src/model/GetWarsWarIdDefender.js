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
    root.EveApi.GetWarsWarIdDefender = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetWarsWarIdDefender model module.
   * @module model/GetWarsWarIdDefender
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetWarsWarIdDefender</code>.
   * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
   * @alias module:model/GetWarsWarIdDefender
   * @class
   * @param isk_destroyed {Number} ISK value of ships the defender has killed
   * @param ships_killed {Number} The number of ships the defender has killed
   */
  var exports = function(isk_destroyed, ships_killed) {
    this.isk_destroyed = isk_destroyed;
    this.ships_killed = ships_killed;
  };

  /**
   * Constructs a <code>GetWarsWarIdDefender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdDefender} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdDefender} The populated <code>GetWarsWarIdDefender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.alliance_id = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('corporation_id'))
        obj.corporation_id = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('isk_destroyed'))
        obj.isk_destroyed = ApiClient.convertToType(data['isk_destroyed'], 'Number');
      if (data.hasOwnProperty('ships_killed'))
        obj.ships_killed = ApiClient.convertToType(data['ships_killed'], 'Number');
    }
    return obj;
  }

  /**
   * Alliance ID if and only if the defender is an alliance
   * @member {Number} alliance_id
   */
  exports.prototype.alliance_id = undefined;

  /**
   * Corporation ID if and only if the defender is a corporation
   * @member {Number} corporation_id
   */
  exports.prototype.corporation_id = undefined;

  /**
   * ISK value of ships the defender has killed
   * @member {Number} isk_destroyed
   */
  exports.prototype.isk_destroyed = undefined;

  /**
   * The number of ships the defender has killed
   * @member {Number} ships_killed
   */
  exports.prototype.ships_killed = undefined;


  return exports;

}));
