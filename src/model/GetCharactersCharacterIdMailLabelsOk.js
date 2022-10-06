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
    define(['ApiClient', 'model/GetCharactersCharacterIdMailLabelsLabel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdMailLabelsLabel'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetCharactersCharacterIdMailLabelsOk = factory(root.EveApi.ApiClient, root.EveApi.GetCharactersCharacterIdMailLabelsLabel);
  }
}(this, function(ApiClient, GetCharactersCharacterIdMailLabelsLabel) {
  'use strict';

  /**
   * The GetCharactersCharacterIdMailLabelsOk model module.
   * @module model/GetCharactersCharacterIdMailLabelsOk
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailLabelsOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMailLabelsOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailLabelsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailLabelsOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailLabelsOk} The populated <code>GetCharactersCharacterIdMailLabelsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], [GetCharactersCharacterIdMailLabelsLabel]);
      if (data.hasOwnProperty('total_unread_count'))
        obj.total_unread_count = ApiClient.convertToType(data['total_unread_count'], 'Number');
    }
    return obj;
  }

  /**
   * labels array
   * @member {Array.<module:model/GetCharactersCharacterIdMailLabelsLabel>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * total_unread_count integer
   * @member {Number} total_unread_count
   */
  exports.prototype.total_unread_count = undefined;


  return exports;

}));
