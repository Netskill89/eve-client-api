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
    root.EveApi.PostCharactersCharacterIdFittingsCreated = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostCharactersCharacterIdFittingsCreated model module.
   * @module model/PostCharactersCharacterIdFittingsCreated
   * @version 1.12
   */

  /**
   * Constructs a new <code>PostCharactersCharacterIdFittingsCreated</code>.
   * 201 created object
   * @alias module:model/PostCharactersCharacterIdFittingsCreated
   * @class
   * @param fitting_id {Number} fitting_id integer
   */
  var exports = function(fitting_id) {
    this.fitting_id = fitting_id;
  };

  /**
   * Constructs a <code>PostCharactersCharacterIdFittingsCreated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCharactersCharacterIdFittingsCreated} obj Optional instance to populate.
   * @return {module:model/PostCharactersCharacterIdFittingsCreated} The populated <code>PostCharactersCharacterIdFittingsCreated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fitting_id'))
        obj.fitting_id = ApiClient.convertToType(data['fitting_id'], 'Number');
    }
    return obj;
  }

  /**
   * fitting_id integer
   * @member {Number} fitting_id
   */
  exports.prototype.fitting_id = undefined;


  return exports;

}));
