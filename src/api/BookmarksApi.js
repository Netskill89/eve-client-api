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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdBookmarks200Ok', 'model/GetCharactersCharacterIdBookmarksFolders200Ok', 'model/GetCorporationsCorporationIdBookmarks200Ok', 'model/GetCorporationsCorporationIdBookmarksFolders200Ok', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdBookmarks200Ok'), require('../model/GetCharactersCharacterIdBookmarksFolders200Ok'), require('../model/GetCorporationsCorporationIdBookmarks200Ok'), require('../model/GetCorporationsCorporationIdBookmarksFolders200Ok'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.BookmarksApi = factory(root.EveApi.ApiClient, root.EveApi.BadRequest, root.EveApi.ErrorLimited, root.EveApi.Forbidden, root.EveApi.GatewayTimeout, root.EveApi.GetCharactersCharacterIdBookmarks200Ok, root.EveApi.GetCharactersCharacterIdBookmarksFolders200Ok, root.EveApi.GetCorporationsCorporationIdBookmarks200Ok, root.EveApi.GetCorporationsCorporationIdBookmarksFolders200Ok, root.EveApi.InternalServerError, root.EveApi.ServiceUnavailable, root.EveApi.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdBookmarks200Ok, GetCharactersCharacterIdBookmarksFolders200Ok, GetCorporationsCorporationIdBookmarks200Ok, GetCorporationsCorporationIdBookmarksFolders200Ok, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Bookmarks service.
   * @module api/BookmarksApi
   * @version 1.12
   */

  /**
   * Constructs a new BookmarksApi. 
   * @alias module:api/BookmarksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdBookmarks operation.
     * @callback module:api/BookmarksApi~getCharactersCharacterIdBookmarksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdBookmarks200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bookmarks
     * A list of your character's personal bookmarks  --- Alternate route: `/dev/characters/{character_id}/bookmarks/`  Alternate route: `/v2/characters/{character_id}/bookmarks/`  --- This route is cached for up to 3600 seconds
     * @param {Number} character_id An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/BookmarksApi~getCharactersCharacterIdBookmarksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdBookmarks200Ok>}
     */
    this.getCharactersCharacterIdBookmarks = function(character_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'character_id' is set
      if (character_id === undefined || character_id === null) {
        throw new Error("Missing the required parameter 'character_id' when calling getCharactersCharacterIdBookmarks");
      }


      var pathParams = {
        'character_id': character_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCharactersCharacterIdBookmarks200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/bookmarks/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdBookmarksFolders operation.
     * @callback module:api/BookmarksApi~getCharactersCharacterIdBookmarksFoldersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdBookmarksFolders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bookmark folders
     * A list of your character's personal bookmark folders  --- Alternate route: `/dev/characters/{character_id}/bookmarks/folders/`  Alternate route: `/v2/characters/{character_id}/bookmarks/folders/`  --- This route is cached for up to 3600 seconds
     * @param {Number} character_id An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/BookmarksApi~getCharactersCharacterIdBookmarksFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdBookmarksFolders200Ok>}
     */
    this.getCharactersCharacterIdBookmarksFolders = function(character_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'character_id' is set
      if (character_id === undefined || character_id === null) {
        throw new Error("Missing the required parameter 'character_id' when calling getCharactersCharacterIdBookmarksFolders");
      }


      var pathParams = {
        'character_id': character_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCharactersCharacterIdBookmarksFolders200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/bookmarks/folders/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdBookmarks operation.
     * @callback module:api/BookmarksApi~getCorporationsCorporationIdBookmarksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdBookmarks200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List corporation bookmarks
     * A list of your corporation's bookmarks  --- Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`  Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`  Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`  --- This route is cached for up to 3600 seconds
     * @param {Number} corporation_id An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/BookmarksApi~getCorporationsCorporationIdBookmarksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdBookmarks200Ok>}
     */
    this.getCorporationsCorporationIdBookmarks = function(corporation_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporation_id' is set
      if (corporation_id === undefined || corporation_id === null) {
        throw new Error("Missing the required parameter 'corporation_id' when calling getCorporationsCorporationIdBookmarks");
      }


      var pathParams = {
        'corporation_id': corporation_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCorporationsCorporationIdBookmarks200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/bookmarks/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdBookmarksFolders operation.
     * @callback module:api/BookmarksApi~getCorporationsCorporationIdBookmarksFoldersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdBookmarksFolders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List corporation bookmark folders
     * A list of your corporation's bookmark folders  --- Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`  Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`  Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`  --- This route is cached for up to 3600 seconds
     * @param {Number} corporation_id An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.If_None_Match ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/BookmarksApi~getCorporationsCorporationIdBookmarksFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdBookmarksFolders200Ok>}
     */
    this.getCorporationsCorporationIdBookmarksFolders = function(corporation_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporation_id' is set
      if (corporation_id === undefined || corporation_id === null) {
        throw new Error("Missing the required parameter 'corporation_id' when calling getCorporationsCorporationIdBookmarksFolders");
      }


      var pathParams = {
        'corporation_id': corporation_id
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCorporationsCorporationIdBookmarksFolders200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/bookmarks/folders/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
