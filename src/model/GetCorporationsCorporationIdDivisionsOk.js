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
    define(['ApiClient', 'model/GetCorporationsCorporationIdDivisionsHangarHangar', 'model/GetCorporationsCorporationIdDivisionsWalletWallet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCorporationsCorporationIdDivisionsHangarHangar'), require('./GetCorporationsCorporationIdDivisionsWalletWallet'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetCorporationsCorporationIdDivisionsOk = factory(root.EveApi.ApiClient, root.EveApi.GetCorporationsCorporationIdDivisionsHangarHangar, root.EveApi.GetCorporationsCorporationIdDivisionsWalletWallet);
  }
}(this, function(ApiClient, GetCorporationsCorporationIdDivisionsHangarHangar, GetCorporationsCorporationIdDivisionsWalletWallet) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdDivisionsOk model module.
   * @module model/GetCorporationsCorporationIdDivisionsOk
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdDivisionsOk</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdDivisionsOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdDivisionsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdDivisionsOk} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdDivisionsOk} The populated <code>GetCorporationsCorporationIdDivisionsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hangar'))
        obj.hangar = ApiClient.convertToType(data['hangar'], [GetCorporationsCorporationIdDivisionsHangarHangar]);
      if (data.hasOwnProperty('wallet'))
        obj.wallet = ApiClient.convertToType(data['wallet'], [GetCorporationsCorporationIdDivisionsWalletWallet]);
    }
    return obj;
  }

  /**
   * hangar array
   * @member {Array.<module:model/GetCorporationsCorporationIdDivisionsHangarHangar>} hangar
   */
  exports.prototype.hangar = undefined;

  /**
   * wallet array
   * @member {Array.<module:model/GetCorporationsCorporationIdDivisionsWalletWallet>} wallet
   */
  exports.prototype.wallet = undefined;


  return exports;

}));
