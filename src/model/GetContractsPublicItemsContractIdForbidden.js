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
    root.EveApi.GetContractsPublicItemsContractIdForbidden = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetContractsPublicItemsContractIdForbidden model module.
   * @module model/GetContractsPublicItemsContractIdForbidden
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetContractsPublicItemsContractIdForbidden</code>.
   * Forbidden
   * @alias module:model/GetContractsPublicItemsContractIdForbidden
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetContractsPublicItemsContractIdForbidden</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContractsPublicItemsContractIdForbidden} obj Optional instance to populate.
   * @return {module:model/GetContractsPublicItemsContractIdForbidden} The populated <code>GetContractsPublicItemsContractIdForbidden</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
    }
    return obj;
  }

  /**
   * Forbidden message
   * @member {String} error
   */
  exports.prototype.error = undefined;


  return exports;

}));
