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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/InternalServerError', 'model/PostUiOpenwindowNewmailNewMail', 'model/PostUiOpenwindowNewmailUnprocessableEntity', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/InternalServerError'), require('../model/PostUiOpenwindowNewmailNewMail'), require('../model/PostUiOpenwindowNewmailUnprocessableEntity'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.UserInterfaceApi = factory(root.EveApi.ApiClient, root.EveApi.BadRequest, root.EveApi.ErrorLimited, root.EveApi.Forbidden, root.EveApi.GatewayTimeout, root.EveApi.InternalServerError, root.EveApi.PostUiOpenwindowNewmailNewMail, root.EveApi.PostUiOpenwindowNewmailUnprocessableEntity, root.EveApi.ServiceUnavailable, root.EveApi.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, InternalServerError, PostUiOpenwindowNewmailNewMail, PostUiOpenwindowNewmailUnprocessableEntity, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * UserInterface service.
   * @module api/UserInterfaceApi
   * @version 1.12
   */

  /**
   * Constructs a new UserInterfaceApi. 
   * @alias module:api/UserInterfaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the postUiAutopilotWaypoint operation.
     * @callback module:api/UserInterfaceApi~postUiAutopilotWaypointCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Autopilot Waypoint
     * Set a solar system as autopilot waypoint  --- Alternate route: `/dev/ui/autopilot/waypoint/`  Alternate route: `/legacy/ui/autopilot/waypoint/`  Alternate route: `/v2/ui/autopilot/waypoint/` 
     * @param {Boolean} add_to_beginning Whether this solar system should be added to the beginning of all waypoints
     * @param {Boolean} clear_other_waypoints Whether clean other waypoints beforing adding this one
     * @param {Number} destination_id The destination to travel to, can be solar system, station or structure's id
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/UserInterfaceApi~postUiAutopilotWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postUiAutopilotWaypoint = function(add_to_beginning, clear_other_waypoints, destination_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'add_to_beginning' is set
      if (add_to_beginning === undefined || add_to_beginning === null) {
        throw new Error("Missing the required parameter 'add_to_beginning' when calling postUiAutopilotWaypoint");
      }

      // verify the required parameter 'clear_other_waypoints' is set
      if (clear_other_waypoints === undefined || clear_other_waypoints === null) {
        throw new Error("Missing the required parameter 'clear_other_waypoints' when calling postUiAutopilotWaypoint");
      }

      // verify the required parameter 'destination_id' is set
      if (destination_id === undefined || destination_id === null) {
        throw new Error("Missing the required parameter 'destination_id' when calling postUiAutopilotWaypoint");
      }


      var pathParams = {
      };
      var queryParams = {
        'add_to_beginning': add_to_beginning,
        'clear_other_waypoints': clear_other_waypoints,
        'datasource': opts['datasource'],
        'destination_id': destination_id,
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ui/autopilot/waypoint/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUiOpenwindowContract operation.
     * @callback module:api/UserInterfaceApi~postUiOpenwindowContractCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open Contract Window
     * Open the contract window inside the client  --- Alternate route: `/dev/ui/openwindow/contract/`  Alternate route: `/legacy/ui/openwindow/contract/`  Alternate route: `/v1/ui/openwindow/contract/` 
     * @param {Number} contract_id The contract to open
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/UserInterfaceApi~postUiOpenwindowContractCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postUiOpenwindowContract = function(contract_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contract_id' is set
      if (contract_id === undefined || contract_id === null) {
        throw new Error("Missing the required parameter 'contract_id' when calling postUiOpenwindowContract");
      }


      var pathParams = {
      };
      var queryParams = {
        'contract_id': contract_id,
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ui/openwindow/contract/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUiOpenwindowInformation operation.
     * @callback module:api/UserInterfaceApi~postUiOpenwindowInformationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open Information Window
     * Open the information window for a character, corporation or alliance inside the client  --- Alternate route: `/dev/ui/openwindow/information/`  Alternate route: `/legacy/ui/openwindow/information/`  Alternate route: `/v1/ui/openwindow/information/` 
     * @param {Number} target_id The target to open
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/UserInterfaceApi~postUiOpenwindowInformationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postUiOpenwindowInformation = function(target_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'target_id' is set
      if (target_id === undefined || target_id === null) {
        throw new Error("Missing the required parameter 'target_id' when calling postUiOpenwindowInformation");
      }


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'target_id': target_id,
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ui/openwindow/information/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUiOpenwindowMarketdetails operation.
     * @callback module:api/UserInterfaceApi~postUiOpenwindowMarketdetailsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open Market Details
     * Open the market details window for a specific typeID inside the client  --- Alternate route: `/dev/ui/openwindow/marketdetails/`  Alternate route: `/legacy/ui/openwindow/marketdetails/`  Alternate route: `/v1/ui/openwindow/marketdetails/` 
     * @param {Number} type_id The item type to open in market window
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/UserInterfaceApi~postUiOpenwindowMarketdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postUiOpenwindowMarketdetails = function(type_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type_id' is set
      if (type_id === undefined || type_id === null) {
        throw new Error("Missing the required parameter 'type_id' when calling postUiOpenwindowMarketdetails");
      }


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'type_id': type_id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ui/openwindow/marketdetails/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUiOpenwindowNewmail operation.
     * @callback module:api/UserInterfaceApi~postUiOpenwindowNewmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open New Mail Window
     * Open the New Mail window, according to settings from the request if applicable  --- Alternate route: `/dev/ui/openwindow/newmail/`  Alternate route: `/legacy/ui/openwindow/newmail/`  Alternate route: `/v1/ui/openwindow/newmail/` 
     * @param {module:model/PostUiOpenwindowNewmailNewMail} new_mail The details of mail to create
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/UserInterfaceApi~postUiOpenwindowNewmailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postUiOpenwindowNewmail = function(new_mail, opts, callback) {
      opts = opts || {};
      var postBody = new_mail;

      // verify the required parameter 'new_mail' is set
      if (new_mail === undefined || new_mail === null) {
        throw new Error("Missing the required parameter 'new_mail' when calling postUiOpenwindowNewmail");
      }


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/ui/openwindow/newmail/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
