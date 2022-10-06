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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdLoyaltyPoints200Ok', 'model/GetLoyaltyStoresCorporationIdOffers200Ok', 'model/GetLoyaltyStoresCorporationIdOffersNotFound', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdLoyaltyPoints200Ok'), require('../model/GetLoyaltyStoresCorporationIdOffers200Ok'), require('../model/GetLoyaltyStoresCorporationIdOffersNotFound'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.LoyaltyApi = factory(root.EveApi.ApiClient, root.EveApi.BadRequest, root.EveApi.ErrorLimited, root.EveApi.Forbidden, root.EveApi.GatewayTimeout, root.EveApi.GetCharactersCharacterIdLoyaltyPoints200Ok, root.EveApi.GetLoyaltyStoresCorporationIdOffers200Ok, root.EveApi.GetLoyaltyStoresCorporationIdOffersNotFound, root.EveApi.InternalServerError, root.EveApi.ServiceUnavailable, root.EveApi.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdLoyaltyPoints200Ok, GetLoyaltyStoresCorporationIdOffers200Ok, GetLoyaltyStoresCorporationIdOffersNotFound, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Loyalty service.
   * @module api/LoyaltyApi
   * @version 1.12
   */

  /**
   * Constructs a new LoyaltyApi. 
   * @alias module:api/LoyaltyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdLoyaltyPoints operation.
     * @callback module:api/LoyaltyApi~getCharactersCharacterIdLoyaltyPointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdLoyaltyPoints200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get loyalty points
     * Return a list of loyalty points for all corporations the character has worked for  --- Alternate route: `/dev/characters/{character_id}/loyalty/points/`  Alternate route: `/legacy/characters/{character_id}/loyalty/points/`  Alternate route: `/v1/characters/{character_id}/loyalty/points/`  --- This route is cached for up to 3600 seconds
     * @param {Number} character_id An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/LoyaltyApi~getCharactersCharacterIdLoyaltyPointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdLoyaltyPoints200Ok>}
     */
    this.getCharactersCharacterIdLoyaltyPoints = function(character_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'character_id' is set
      if (character_id === undefined || character_id === null) {
        throw new Error("Missing the required parameter 'character_id' when calling getCharactersCharacterIdLoyaltyPoints");
      }


      var pathParams = {
        'character_id': character_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['If_None_Match']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdLoyaltyPoints200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/loyalty/points/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoyaltyStoresCorporationIdOffers operation.
     * @callback module:api/LoyaltyApi~getLoyaltyStoresCorporationIdOffersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetLoyaltyStoresCorporationIdOffers200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List loyalty store offers
     * Return a list of offers from a specific corporation's loyalty store  --- Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`  Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`  Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`  --- This route expires daily at 11:05
     * @param {Number} corporation_id An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/LoyaltyApi~getLoyaltyStoresCorporationIdOffersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetLoyaltyStoresCorporationIdOffers200Ok>}
     */
    this.getLoyaltyStoresCorporationIdOffers = function(corporation_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporation_id' is set
      if (corporation_id === undefined || corporation_id === null) {
        throw new Error("Missing the required parameter 'corporation_id' when calling getLoyaltyStoresCorporationIdOffers");
      }


      var pathParams = {
        'corporation_id': corporation_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['If_None_Match']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetLoyaltyStoresCorporationIdOffers200Ok];

      return this.apiClient.callApi(
        '/loyalty/stores/{corporation_id}/offers/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
