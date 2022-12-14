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
    define(['ApiClient', 'model/GetLoyaltyStoresCorporationIdOffersRequiredItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetLoyaltyStoresCorporationIdOffersRequiredItem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetLoyaltyStoresCorporationIdOffers200Ok = factory(root.EveApi.ApiClient, root.EveApi.GetLoyaltyStoresCorporationIdOffersRequiredItem);
  }
}(this, function(ApiClient, GetLoyaltyStoresCorporationIdOffersRequiredItem) {
  'use strict';

  /**
   * The GetLoyaltyStoresCorporationIdOffers200Ok model module.
   * @module model/GetLoyaltyStoresCorporationIdOffers200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetLoyaltyStoresCorporationIdOffers200Ok</code>.
   * 200 ok object
   * @alias module:model/GetLoyaltyStoresCorporationIdOffers200Ok
   * @class
   * @param isk_cost {Number} isk_cost integer
   * @param lp_cost {Number} lp_cost integer
   * @param offer_id {Number} offer_id integer
   * @param quantity {Number} quantity integer
   * @param required_items {Array.<module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem>} required_items array
   * @param type_id {Number} type_id integer
   */
  var exports = function(isk_cost, lp_cost, offer_id, quantity, required_items, type_id) {
    this.isk_cost = isk_cost;
    this.lp_cost = lp_cost;
    this.offer_id = offer_id;
    this.quantity = quantity;
    this.required_items = required_items;
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetLoyaltyStoresCorporationIdOffers200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLoyaltyStoresCorporationIdOffers200Ok} obj Optional instance to populate.
   * @return {module:model/GetLoyaltyStoresCorporationIdOffers200Ok} The populated <code>GetLoyaltyStoresCorporationIdOffers200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ak_cost'))
        obj.ak_cost = ApiClient.convertToType(data['ak_cost'], 'Number');
      if (data.hasOwnProperty('isk_cost'))
        obj.isk_cost = ApiClient.convertToType(data['isk_cost'], 'Number');
      if (data.hasOwnProperty('lp_cost'))
        obj.lp_cost = ApiClient.convertToType(data['lp_cost'], 'Number');
      if (data.hasOwnProperty('offer_id'))
        obj.offer_id = ApiClient.convertToType(data['offer_id'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('required_items'))
        obj.required_items = ApiClient.convertToType(data['required_items'], [GetLoyaltyStoresCorporationIdOffersRequiredItem]);
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Analysis kredit cost
   * @member {Number} ak_cost
   */
  exports.prototype.ak_cost = undefined;

  /**
   * isk_cost integer
   * @member {Number} isk_cost
   */
  exports.prototype.isk_cost = undefined;

  /**
   * lp_cost integer
   * @member {Number} lp_cost
   */
  exports.prototype.lp_cost = undefined;

  /**
   * offer_id integer
   * @member {Number} offer_id
   */
  exports.prototype.offer_id = undefined;

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * required_items array
   * @member {Array.<module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem>} required_items
   */
  exports.prototype.required_items = undefined;

  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype.type_id = undefined;


  return exports;

}));
