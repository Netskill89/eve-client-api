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
    root.EveApi.GetCharactersCharacterIdPlanetsPlanetIdRoute = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdRoute model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdRoute
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code>.
   * route object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute
   * @class
   * @param content_type_id {Number} content_type_id integer
   * @param destination_pin_id {Number} destination_pin_id integer
   * @param quantity {Number} quantity number
   * @param route_id {Number} route_id integer
   * @param source_pin_id {Number} source_pin_id integer
   */
  var exports = function(content_type_id, destination_pin_id, quantity, route_id, source_pin_id) {
    this.content_type_id = content_type_id;
    this.destination_pin_id = destination_pin_id;
    this.quantity = quantity;
    this.route_id = route_id;
    this.source_pin_id = source_pin_id;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('content_type_id'))
        obj.content_type_id = ApiClient.convertToType(data['content_type_id'], 'Number');
      if (data.hasOwnProperty('destination_pin_id'))
        obj.destination_pin_id = ApiClient.convertToType(data['destination_pin_id'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('route_id'))
        obj.route_id = ApiClient.convertToType(data['route_id'], 'Number');
      if (data.hasOwnProperty('source_pin_id'))
        obj.source_pin_id = ApiClient.convertToType(data['source_pin_id'], 'Number');
      if (data.hasOwnProperty('waypoints'))
        obj.waypoints = ApiClient.convertToType(data['waypoints'], ['Number']);
    }
    return obj;
  }

  /**
   * content_type_id integer
   * @member {Number} content_type_id
   */
  exports.prototype.content_type_id = undefined;

  /**
   * destination_pin_id integer
   * @member {Number} destination_pin_id
   */
  exports.prototype.destination_pin_id = undefined;

  /**
   * quantity number
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * route_id integer
   * @member {Number} route_id
   */
  exports.prototype.route_id = undefined;

  /**
   * source_pin_id integer
   * @member {Number} source_pin_id
   */
  exports.prototype.source_pin_id = undefined;

  /**
   * list of pin ID waypoints
   * @member {Array.<Number>} waypoints
   */
  exports.prototype.waypoints = undefined;


  return exports;

}));
