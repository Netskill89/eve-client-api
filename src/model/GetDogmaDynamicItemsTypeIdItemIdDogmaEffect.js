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
    root.EveApi.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetDogmaDynamicItemsTypeIdItemIdDogmaEffect model module.
   * @module model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code>.
   * dogma_effect object
   * @alias module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect
   * @class
   * @param effect_id {Number} effect_id integer
   * @param is_default {Boolean} is_default boolean
   */
  var exports = function(effect_id, is_default) {
    this.effect_id = effect_id;
    this.is_default = is_default;
  };

  /**
   * Constructs a <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect} obj Optional instance to populate.
   * @return {module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect} The populated <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('effect_id'))
        obj.effect_id = ApiClient.convertToType(data['effect_id'], 'Number');
      if (data.hasOwnProperty('is_default'))
        obj.is_default = ApiClient.convertToType(data['is_default'], 'Boolean');
    }
    return obj;
  }

  /**
   * effect_id integer
   * @member {Number} effect_id
   */
  exports.prototype.effect_id = undefined;

  /**
   * is_default boolean
   * @member {Boolean} is_default
   */
  exports.prototype.is_default = undefined;


  return exports;

}));
