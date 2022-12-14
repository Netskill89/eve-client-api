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
    root.EveApi.GetCharactersCharacterIdAgentsResearch200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdAgentsResearch200Ok model module.
   * @module model/GetCharactersCharacterIdAgentsResearch200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdAgentsResearch200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdAgentsResearch200Ok
   * @class
   * @param agent_id {Number} agent_id integer
   * @param points_per_day {Number} points_per_day number
   * @param remainder_points {Number} remainder_points number
   * @param skill_type_id {Number} skill_type_id integer
   * @param started_at {Date} started_at string
   */
  var exports = function(agent_id, points_per_day, remainder_points, skill_type_id, started_at) {
    this.agent_id = agent_id;
    this.points_per_day = points_per_day;
    this.remainder_points = remainder_points;
    this.skill_type_id = skill_type_id;
    this.started_at = started_at;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdAgentsResearch200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdAgentsResearch200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdAgentsResearch200Ok} The populated <code>GetCharactersCharacterIdAgentsResearch200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent_id'))
        obj.agent_id = ApiClient.convertToType(data['agent_id'], 'Number');
      if (data.hasOwnProperty('points_per_day'))
        obj.points_per_day = ApiClient.convertToType(data['points_per_day'], 'Number');
      if (data.hasOwnProperty('remainder_points'))
        obj.remainder_points = ApiClient.convertToType(data['remainder_points'], 'Number');
      if (data.hasOwnProperty('skill_type_id'))
        obj.skill_type_id = ApiClient.convertToType(data['skill_type_id'], 'Number');
      if (data.hasOwnProperty('started_at'))
        obj.started_at = ApiClient.convertToType(data['started_at'], 'Date');
    }
    return obj;
  }

  /**
   * agent_id integer
   * @member {Number} agent_id
   */
  exports.prototype.agent_id = undefined;

  /**
   * points_per_day number
   * @member {Number} points_per_day
   */
  exports.prototype.points_per_day = undefined;

  /**
   * remainder_points number
   * @member {Number} remainder_points
   */
  exports.prototype.remainder_points = undefined;

  /**
   * skill_type_id integer
   * @member {Number} skill_type_id
   */
  exports.prototype.skill_type_id = undefined;

  /**
   * started_at string
   * @member {Date} started_at
   */
  exports.prototype.started_at = undefined;


  return exports;

}));
