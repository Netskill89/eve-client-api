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
    root.EveApi.GetCharactersCharacterIdFwStatsVictoryPoints = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdFwStatsVictoryPoints model module.
   * @module model/GetCharactersCharacterIdFwStatsVictoryPoints
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFwStatsVictoryPoints</code>.
   * Summary of victory points gained by the given character for the enlisted faction
   * @alias module:model/GetCharactersCharacterIdFwStatsVictoryPoints
   * @class
   * @param last_week {Number} Last week's victory points gained by the given character
   * @param total {Number} Total victory points gained since the given character enlisted
   * @param yesterday {Number} Yesterday's victory points gained by the given character
   */
  var exports = function(last_week, total, yesterday) {
    this.last_week = last_week;
    this.total = total;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFwStatsVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFwStatsVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFwStatsVictoryPoints} The populated <code>GetCharactersCharacterIdFwStatsVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_week'))
        obj.last_week = ApiClient.convertToType(data['last_week'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], 'Number');
    }
    return obj;
  }

  /**
   * Last week's victory points gained by the given character
   * @member {Number} last_week
   */
  exports.prototype.last_week = undefined;

  /**
   * Total victory points gained since the given character enlisted
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * Yesterday's victory points gained by the given character
   * @member {Number} yesterday
   */
  exports.prototype.yesterday = undefined;


  return exports;

}));