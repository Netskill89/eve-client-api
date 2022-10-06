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
    root.EveApi.GetCorporationsCorporationIdCustomsOffices200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdCustomsOffices200Ok model module.
   * @module model/GetCorporationsCorporationIdCustomsOffices200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdCustomsOffices200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdCustomsOffices200Ok
   * @class
   * @param allow_access_with_standings {Boolean} standing_level and any standing related tax rate only present when this is true
   * @param allow_alliance_access {Boolean} allow_alliance_access boolean
   * @param office_id {Number} unique ID of this customs office
   * @param reinforce_exit_end {Number} reinforce_exit_end integer
   * @param reinforce_exit_start {Number} Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
   * @param system_id {Number} ID of the solar system this customs office is located in
   */
  var exports = function(allow_access_with_standings, allow_alliance_access, office_id, reinforce_exit_end, reinforce_exit_start, system_id) {
    this.allow_access_with_standings = allow_access_with_standings;
    this.allow_alliance_access = allow_alliance_access;
    this.office_id = office_id;
    this.reinforce_exit_end = reinforce_exit_end;
    this.reinforce_exit_start = reinforce_exit_start;
    this.system_id = system_id;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdCustomsOffices200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdCustomsOffices200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdCustomsOffices200Ok} The populated <code>GetCorporationsCorporationIdCustomsOffices200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alliance_tax_rate'))
        obj.alliance_tax_rate = ApiClient.convertToType(data['alliance_tax_rate'], 'Number');
      if (data.hasOwnProperty('allow_access_with_standings'))
        obj.allow_access_with_standings = ApiClient.convertToType(data['allow_access_with_standings'], 'Boolean');
      if (data.hasOwnProperty('allow_alliance_access'))
        obj.allow_alliance_access = ApiClient.convertToType(data['allow_alliance_access'], 'Boolean');
      if (data.hasOwnProperty('bad_standing_tax_rate'))
        obj.bad_standing_tax_rate = ApiClient.convertToType(data['bad_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('corporation_tax_rate'))
        obj.corporation_tax_rate = ApiClient.convertToType(data['corporation_tax_rate'], 'Number');
      if (data.hasOwnProperty('excellent_standing_tax_rate'))
        obj.excellent_standing_tax_rate = ApiClient.convertToType(data['excellent_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('good_standing_tax_rate'))
        obj.good_standing_tax_rate = ApiClient.convertToType(data['good_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('neutral_standing_tax_rate'))
        obj.neutral_standing_tax_rate = ApiClient.convertToType(data['neutral_standing_tax_rate'], 'Number');
      if (data.hasOwnProperty('office_id'))
        obj.office_id = ApiClient.convertToType(data['office_id'], 'Number');
      if (data.hasOwnProperty('reinforce_exit_end'))
        obj.reinforce_exit_end = ApiClient.convertToType(data['reinforce_exit_end'], 'Number');
      if (data.hasOwnProperty('reinforce_exit_start'))
        obj.reinforce_exit_start = ApiClient.convertToType(data['reinforce_exit_start'], 'Number');
      if (data.hasOwnProperty('standing_level'))
        obj.standing_level = ApiClient.convertToType(data['standing_level'], 'String');
      if (data.hasOwnProperty('system_id'))
        obj.system_id = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('terrible_standing_tax_rate'))
        obj.terrible_standing_tax_rate = ApiClient.convertToType(data['terrible_standing_tax_rate'], 'Number');
    }
    return obj;
  }

  /**
   * Only present if alliance access is allowed
   * @member {Number} alliance_tax_rate
   */
  exports.prototype.alliance_tax_rate = undefined;

  /**
   * standing_level and any standing related tax rate only present when this is true
   * @member {Boolean} allow_access_with_standings
   */
  exports.prototype.allow_access_with_standings = undefined;

  /**
   * allow_alliance_access boolean
   * @member {Boolean} allow_alliance_access
   */
  exports.prototype.allow_alliance_access = undefined;

  /**
   * bad_standing_tax_rate number
   * @member {Number} bad_standing_tax_rate
   */
  exports.prototype.bad_standing_tax_rate = undefined;

  /**
   * corporation_tax_rate number
   * @member {Number} corporation_tax_rate
   */
  exports.prototype.corporation_tax_rate = undefined;

  /**
   * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
   * @member {Number} excellent_standing_tax_rate
   */
  exports.prototype.excellent_standing_tax_rate = undefined;

  /**
   * good_standing_tax_rate number
   * @member {Number} good_standing_tax_rate
   */
  exports.prototype.good_standing_tax_rate = undefined;

  /**
   * neutral_standing_tax_rate number
   * @member {Number} neutral_standing_tax_rate
   */
  exports.prototype.neutral_standing_tax_rate = undefined;

  /**
   * unique ID of this customs office
   * @member {Number} office_id
   */
  exports.prototype.office_id = undefined;

  /**
   * reinforce_exit_end integer
   * @member {Number} reinforce_exit_end
   */
  exports.prototype.reinforce_exit_end = undefined;

  /**
   * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
   * @member {Number} reinforce_exit_start
   */
  exports.prototype.reinforce_exit_start = undefined;

  /**
   * Access is allowed only for entities with this level of standing or better
   * @member {module:model/GetCorporationsCorporationIdCustomsOffices200Ok.StandingLevelEnum} standing_level
   */
  exports.prototype.standing_level = undefined;

  /**
   * ID of the solar system this customs office is located in
   * @member {Number} system_id
   */
  exports.prototype.system_id = undefined;

  /**
   * terrible_standing_tax_rate number
   * @member {Number} terrible_standing_tax_rate
   */
  exports.prototype.terrible_standing_tax_rate = undefined;



  /**
   * Allowed values for the <code>standing_level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StandingLevelEnum = {
    /**
     * value: "bad"
     * @const
     */
    bad: "bad",

    /**
     * value: "excellent"
     * @const
     */
    excellent: "excellent",

    /**
     * value: "good"
     * @const
     */
    good: "good",

    /**
     * value: "neutral"
     * @const
     */
    neutral: "neutral",

    /**
     * value: "terrible"
     * @const
     */
    terrible: "terrible"
  };

  return exports;

}));