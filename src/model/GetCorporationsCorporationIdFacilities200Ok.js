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
    root.EveApi.GetCorporationsCorporationIdFacilities200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdFacilities200Ok model module.
   * @module model/GetCorporationsCorporationIdFacilities200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdFacilities200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdFacilities200Ok
   * @class
   * @param facility_id {Number} facility_id integer
   * @param system_id {Number} system_id integer
   * @param type_id {Number} type_id integer
   */
  var exports = function(facility_id, system_id, type_id) {
    this.facility_id = facility_id;
    this.system_id = system_id;
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdFacilities200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdFacilities200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdFacilities200Ok} The populated <code>GetCorporationsCorporationIdFacilities200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('facility_id'))
        obj.facility_id = ApiClient.convertToType(data['facility_id'], 'Number');
      if (data.hasOwnProperty('system_id'))
        obj.system_id = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * facility_id integer
   * @member {Number} facility_id
   */
  exports.prototype.facility_id = undefined;

  /**
   * system_id integer
   * @member {Number} system_id
   */
  exports.prototype.system_id = undefined;

  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype.type_id = undefined;


  return exports;

}));