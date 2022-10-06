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
    root.EveApi.GetKillmailsKillmailIdKillmailHashAttacker = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetKillmailsKillmailIdKillmailHashAttacker model module.
   * @module model/GetKillmailsKillmailIdKillmailHashAttacker
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetKillmailsKillmailIdKillmailHashAttacker</code>.
   * attacker object
   * @alias module:model/GetKillmailsKillmailIdKillmailHashAttacker
   * @class
   * @param damage_done {Number} damage_done integer
   * @param final_blow {Boolean} Was the attacker the one to achieve the final blow 
   * @param security_status {Number} Security status for the attacker 
   */
  var exports = function(damage_done, final_blow, security_status) {
    this.damage_done = damage_done;
    this.final_blow = final_blow;
    this.security_status = security_status;
  };

  /**
   * Constructs a <code>GetKillmailsKillmailIdKillmailHashAttacker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetKillmailsKillmailIdKillmailHashAttacker} obj Optional instance to populate.
   * @return {module:model/GetKillmailsKillmailIdKillmailHashAttacker} The populated <code>GetKillmailsKillmailIdKillmailHashAttacker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_id'))
        obj.alliance_id = ApiClient.convertToType(data['alliance_id'], 'Number');
      if (data.hasOwnProperty('character_id'))
        obj.character_id = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('corporation_id'))
        obj.corporation_id = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('damage_done'))
        obj.damage_done = ApiClient.convertToType(data['damage_done'], 'Number');
      if (data.hasOwnProperty('faction_id'))
        obj.faction_id = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('final_blow'))
        obj.final_blow = ApiClient.convertToType(data['final_blow'], 'Boolean');
      if (data.hasOwnProperty('security_status'))
        obj.security_status = ApiClient.convertToType(data['security_status'], 'Number');
      if (data.hasOwnProperty('ship_type_id'))
        obj.ship_type_id = ApiClient.convertToType(data['ship_type_id'], 'Number');
      if (data.hasOwnProperty('weapon_type_id'))
        obj.weapon_type_id = ApiClient.convertToType(data['weapon_type_id'], 'Number');
    }
    return obj;
  }

  /**
   * alliance_id integer
   * @member {Number} alliance_id
   */
  exports.prototype.alliance_id = undefined;

  /**
   * character_id integer
   * @member {Number} character_id
   */
  exports.prototype.character_id = undefined;

  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype.corporation_id = undefined;

  /**
   * damage_done integer
   * @member {Number} damage_done
   */
  exports.prototype.damage_done = undefined;

  /**
   * faction_id integer
   * @member {Number} faction_id
   */
  exports.prototype.faction_id = undefined;

  /**
   * Was the attacker the one to achieve the final blow 
   * @member {Boolean} final_blow
   */
  exports.prototype.final_blow = undefined;

  /**
   * Security status for the attacker 
   * @member {Number} security_status
   */
  exports.prototype.security_status = undefined;

  /**
   * What ship was the attacker flying 
   * @member {Number} ship_type_id
   */
  exports.prototype.ship_type_id = undefined;

  /**
   * What weapon was used by the attacker for the kill 
   * @member {Number} weapon_type_id
   */
  exports.prototype.weapon_type_id = undefined;


  return exports;

}));