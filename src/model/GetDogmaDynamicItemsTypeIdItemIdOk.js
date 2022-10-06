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
    define(['ApiClient', 'model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute', 'model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute'), require('./GetDogmaDynamicItemsTypeIdItemIdDogmaEffect'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetDogmaDynamicItemsTypeIdItemIdOk = factory(root.EveApi.ApiClient, root.EveApi.GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute, root.EveApi.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect);
  }
}(this, function(ApiClient, GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute, GetDogmaDynamicItemsTypeIdItemIdDogmaEffect) {
  'use strict';

  /**
   * The GetDogmaDynamicItemsTypeIdItemIdOk model module.
   * @module model/GetDogmaDynamicItemsTypeIdItemIdOk
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetDogmaDynamicItemsTypeIdItemIdOk</code>.
   * 200 ok object
   * @alias module:model/GetDogmaDynamicItemsTypeIdItemIdOk
   * @class
   * @param created_by {Number} The ID of the character who created the item
   * @param dogma_attributes {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>} dogma_attributes array
   * @param dogma_effects {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>} dogma_effects array
   * @param mutator_type_id {Number} The type ID of the mutator used to generate the dynamic item.
   * @param source_type_id {Number} The type ID of the source item the mutator was applied to create the dynamic item.
   */
  var exports = function(created_by, dogma_attributes, dogma_effects, mutator_type_id, source_type_id) {
    this.created_by = created_by;
    this.dogma_attributes = dogma_attributes;
    this.dogma_effects = dogma_effects;
    this.mutator_type_id = mutator_type_id;
    this.source_type_id = source_type_id;
  };

  /**
   * Constructs a <code>GetDogmaDynamicItemsTypeIdItemIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaDynamicItemsTypeIdItemIdOk} obj Optional instance to populate.
   * @return {module:model/GetDogmaDynamicItemsTypeIdItemIdOk} The populated <code>GetDogmaDynamicItemsTypeIdItemIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created_by'))
        obj.created_by = ApiClient.convertToType(data['created_by'], 'Number');
      if (data.hasOwnProperty('dogma_attributes'))
        obj.dogma_attributes = ApiClient.convertToType(data['dogma_attributes'], [GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute]);
      if (data.hasOwnProperty('dogma_effects'))
        obj.dogma_effects = ApiClient.convertToType(data['dogma_effects'], [GetDogmaDynamicItemsTypeIdItemIdDogmaEffect]);
      if (data.hasOwnProperty('mutator_type_id'))
        obj.mutator_type_id = ApiClient.convertToType(data['mutator_type_id'], 'Number');
      if (data.hasOwnProperty('source_type_id'))
        obj.source_type_id = ApiClient.convertToType(data['source_type_id'], 'Number');
    }
    return obj;
  }

  /**
   * The ID of the character who created the item
   * @member {Number} created_by
   */
  exports.prototype.created_by = undefined;

  /**
   * dogma_attributes array
   * @member {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute>} dogma_attributes
   */
  exports.prototype.dogma_attributes = undefined;

  /**
   * dogma_effects array
   * @member {Array.<module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect>} dogma_effects
   */
  exports.prototype.dogma_effects = undefined;

  /**
   * The type ID of the mutator used to generate the dynamic item.
   * @member {Number} mutator_type_id
   */
  exports.prototype.mutator_type_id = undefined;

  /**
   * The type ID of the source item the mutator was applied to create the dynamic item.
   * @member {Number} source_type_id
   */
  exports.prototype.source_type_id = undefined;


  return exports;

}));