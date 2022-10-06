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
    root.EveApi.GetMarketsPrices200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetMarketsPrices200Ok model module.
   * @module model/GetMarketsPrices200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetMarketsPrices200Ok</code>.
   * 200 ok object
   * @alias module:model/GetMarketsPrices200Ok
   * @class
   * @param type_id {Number} type_id integer
   */
  var exports = function(type_id) {
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetMarketsPrices200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMarketsPrices200Ok} obj Optional instance to populate.
   * @return {module:model/GetMarketsPrices200Ok} The populated <code>GetMarketsPrices200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adjusted_price'))
        obj.adjusted_price = ApiClient.convertToType(data['adjusted_price'], 'Number');
      if (data.hasOwnProperty('average_price'))
        obj.average_price = ApiClient.convertToType(data['average_price'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * adjusted_price number
   * @member {Number} adjusted_price
   */
  exports.prototype.adjusted_price = undefined;

  /**
   * average_price number
   * @member {Number} average_price
   */
  exports.prototype.average_price = undefined;

  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype.type_id = undefined;


  return exports;

}));
