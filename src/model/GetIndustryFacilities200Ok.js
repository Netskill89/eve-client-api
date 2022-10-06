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
    root.EveApi.GetIndustryFacilities200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetIndustryFacilities200Ok model module.
   * @module model/GetIndustryFacilities200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetIndustryFacilities200Ok</code>.
   * 200 ok object
   * @alias module:model/GetIndustryFacilities200Ok
   * @class
   * @param facility_id {Number} ID of the facility
   * @param owner_id {Number} Owner of the facility
   * @param region_id {Number} Region ID where the facility is
   * @param solar_system_id {Number} Solar system ID where the facility is
   * @param type_id {Number} Type ID of the facility
   */
  var exports = function(facility_id, owner_id, region_id, solar_system_id, type_id) {
    this.facility_id = facility_id;
    this.owner_id = owner_id;
    this.region_id = region_id;
    this.solar_system_id = solar_system_id;
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetIndustryFacilities200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetIndustryFacilities200Ok} obj Optional instance to populate.
   * @return {module:model/GetIndustryFacilities200Ok} The populated <code>GetIndustryFacilities200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('facility_id'))
        obj.facility_id = ApiClient.convertToType(data['facility_id'], 'Number');
      if (data.hasOwnProperty('owner_id'))
        obj.owner_id = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('region_id'))
        obj.region_id = ApiClient.convertToType(data['region_id'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solar_system_id = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('tax'))
        obj.tax = ApiClient.convertToType(data['tax'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * ID of the facility
   * @member {Number} facility_id
   */
  exports.prototype.facility_id = undefined;

  /**
   * Owner of the facility
   * @member {Number} owner_id
   */
  exports.prototype.owner_id = undefined;

  /**
   * Region ID where the facility is
   * @member {Number} region_id
   */
  exports.prototype.region_id = undefined;

  /**
   * Solar system ID where the facility is
   * @member {Number} solar_system_id
   */
  exports.prototype.solar_system_id = undefined;

  /**
   * Tax imposed by the facility
   * @member {Number} tax
   */
  exports.prototype.tax = undefined;

  /**
   * Type ID of the facility
   * @member {Number} type_id
   */
  exports.prototype.type_id = undefined;


  return exports;

}));