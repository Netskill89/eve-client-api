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
    define(['ApiClient', 'model/GetCharactersCharacterIdMedalsGraphic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdMedalsGraphic'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetCharactersCharacterIdMedals200Ok = factory(root.EveApi.ApiClient, root.EveApi.GetCharactersCharacterIdMedalsGraphic);
  }
}(this, function(ApiClient, GetCharactersCharacterIdMedalsGraphic) {
  'use strict';

  /**
   * The GetCharactersCharacterIdMedals200Ok model module.
   * @module model/GetCharactersCharacterIdMedals200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMedals200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMedals200Ok
   * @class
   * @param corporation_id {Number} corporation_id integer
   * @param _date {Date} date string
   * @param description {String} description string
   * @param graphics {Array.<module:model/GetCharactersCharacterIdMedalsGraphic>} graphics array
   * @param issuer_id {Number} issuer_id integer
   * @param medal_id {Number} medal_id integer
   * @param reason {String} reason string
   * @param status {module:model/GetCharactersCharacterIdMedals200Ok.StatusEnum} status string
   * @param title {String} title string
   */
  var exports = function(corporation_id, _date, description, graphics, issuer_id, medal_id, reason, status, title) {
    this.corporation_id = corporation_id;
    this._date = _date;
    this.description = description;
    this.graphics = graphics;
    this.issuer_id = issuer_id;
    this.medal_id = medal_id;
    this.reason = reason;
    this.status = status;
    this.title = title;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMedals200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMedals200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMedals200Ok} The populated <code>GetCharactersCharacterIdMedals200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('corporation_id'))
        obj.corporation_id = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('graphics'))
        obj.graphics = ApiClient.convertToType(data['graphics'], [GetCharactersCharacterIdMedalsGraphic]);
      if (data.hasOwnProperty('issuer_id'))
        obj.issuer_id = ApiClient.convertToType(data['issuer_id'], 'Number');
      if (data.hasOwnProperty('medal_id'))
        obj.medal_id = ApiClient.convertToType(data['medal_id'], 'Number');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype.corporation_id = undefined;

  /**
   * date string
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * graphics array
   * @member {Array.<module:model/GetCharactersCharacterIdMedalsGraphic>} graphics
   */
  exports.prototype.graphics = undefined;

  /**
   * issuer_id integer
   * @member {Number} issuer_id
   */
  exports.prototype.issuer_id = undefined;

  /**
   * medal_id integer
   * @member {Number} medal_id
   */
  exports.prototype.medal_id = undefined;

  /**
   * reason string
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * status string
   * @member {module:model/GetCharactersCharacterIdMedals200Ok.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * title string
   * @member {String} title
   */
  exports.prototype.title = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "public"
     * @const
     */
    _public: "public",

    /**
     * value: "private"
     * @const
     */
    _private: "private"
  };

  return exports;

}));
