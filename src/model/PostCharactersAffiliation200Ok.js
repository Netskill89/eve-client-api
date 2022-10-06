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
    root.EveApi.PostCharactersAffiliation200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostCharactersAffiliation200Ok model module.
   * @module model/PostCharactersAffiliation200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>PostCharactersAffiliation200Ok</code>.
   * 200 ok object
   * @alias module:model/PostCharactersAffiliation200Ok
   * @class
   * @param character_id {Number} The character's ID
   * @param corporation_id {Number} The character's corporation ID
   */
  var exports = function(character_id, corporation_id) {
    this.character_id = character_id;
    this.corporation_id = corporation_id;
  };

  /**
   * Constructs a <code>PostCharactersAffiliation200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCharactersAffiliation200Ok} obj Optional instance to populate.
   * @return {module:model/PostCharactersAffiliation200Ok} The populated <code>PostCharactersAffiliation200Ok</code> instance.
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
      if (data.hasOwnProperty('faction_id'))
        obj.faction_id = ApiClient.convertToType(data['faction_id'], 'Number');
    }
    return obj;
  }

  /**
   * The character's alliance ID, if their corporation is in an alliance
   * @member {Number} alliance_id
   */
  exports.prototype.alliance_id = undefined;

  /**
   * The character's ID
   * @member {Number} character_id
   */
  exports.prototype.character_id = undefined;

  /**
   * The character's corporation ID
   * @member {Number} corporation_id
   */
  exports.prototype.corporation_id = undefined;

  /**
   * The character's faction ID, if their corporation is in a faction
   * @member {Number} faction_id
   */
  exports.prototype.faction_id = undefined;


  return exports;

}));
