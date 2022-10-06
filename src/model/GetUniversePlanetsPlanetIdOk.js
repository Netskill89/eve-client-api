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
    define(['ApiClient', 'model/GetUniversePlanetsPlanetIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniversePlanetsPlanetIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetUniversePlanetsPlanetIdOk = factory(root.EveApi.ApiClient, root.EveApi.GetUniversePlanetsPlanetIdPosition);
  }
}(this, function(ApiClient, GetUniversePlanetsPlanetIdPosition) {
  'use strict';

  /**
   * The GetUniversePlanetsPlanetIdOk model module.
   * @module model/GetUniversePlanetsPlanetIdOk
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetUniversePlanetsPlanetIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniversePlanetsPlanetIdOk
   * @class
   * @param name {String} name string
   * @param planet_id {Number} planet_id integer
   * @param position {module:model/GetUniversePlanetsPlanetIdPosition} 
   * @param system_id {Number} The solar system this planet is in
   * @param type_id {Number} type_id integer
   */
  var exports = function(name, planet_id, position, system_id, type_id) {
    this.name = name;
    this.planet_id = planet_id;
    this.position = position;
    this.system_id = system_id;
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetUniversePlanetsPlanetIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniversePlanetsPlanetIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniversePlanetsPlanetIdOk} The populated <code>GetUniversePlanetsPlanetIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('planet_id'))
        obj.planet_id = ApiClient.convertToType(data['planet_id'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = GetUniversePlanetsPlanetIdPosition.constructFromObject(data['position']);
      if (data.hasOwnProperty('system_id'))
        obj.system_id = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * planet_id integer
   * @member {Number} planet_id
   */
  exports.prototype.planet_id = undefined;

  /**
   * @member {module:model/GetUniversePlanetsPlanetIdPosition} position
   */
  exports.prototype.position = undefined;

  /**
   * The solar system this planet is in
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
