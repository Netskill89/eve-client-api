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
    define(['ApiClient', 'model/PostCorporationsCorporationIdAssetsLocationsPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostCorporationsCorporationIdAssetsLocationsPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.PostCorporationsCorporationIdAssetsLocations200Ok = factory(root.EveApi.ApiClient, root.EveApi.PostCorporationsCorporationIdAssetsLocationsPosition);
  }
}(this, function(ApiClient, PostCorporationsCorporationIdAssetsLocationsPosition) {
  'use strict';

  /**
   * The PostCorporationsCorporationIdAssetsLocations200Ok model module.
   * @module model/PostCorporationsCorporationIdAssetsLocations200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>PostCorporationsCorporationIdAssetsLocations200Ok</code>.
   * 200 ok object
   * @alias module:model/PostCorporationsCorporationIdAssetsLocations200Ok
   * @class
   * @param item_id {Number} item_id integer
   * @param position {module:model/PostCorporationsCorporationIdAssetsLocationsPosition} 
   */
  var exports = function(item_id, position) {
    this.item_id = item_id;
    this.position = position;
  };

  /**
   * Constructs a <code>PostCorporationsCorporationIdAssetsLocations200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCorporationsCorporationIdAssetsLocations200Ok} obj Optional instance to populate.
   * @return {module:model/PostCorporationsCorporationIdAssetsLocations200Ok} The populated <code>PostCorporationsCorporationIdAssetsLocations200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = PostCorporationsCorporationIdAssetsLocationsPosition.constructFromObject(data['position']);
    }
    return obj;
  }

  /**
   * item_id integer
   * @member {Number} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * @member {module:model/PostCorporationsCorporationIdAssetsLocationsPosition} position
   */
  exports.prototype.position = undefined;


  return exports;

}));
