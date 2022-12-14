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
    define(['ApiClient', 'model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal', 'model/GetFwLeaderboardsCorporationsLastWeekLastWeek', 'model/GetFwLeaderboardsCorporationsYesterdayYesterday'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCorporationsActiveTotalActiveTotal'), require('./GetFwLeaderboardsCorporationsLastWeekLastWeek'), require('./GetFwLeaderboardsCorporationsYesterdayYesterday'));
  } else {
    // Browser globals (root is window)
    if (!root.EveApi) {
      root.EveApi = {};
    }
    root.EveApi.GetFwLeaderboardsCorporationsKills = factory(root.EveApi.ApiClient, root.EveApi.GetFwLeaderboardsCorporationsActiveTotalActiveTotal, root.EveApi.GetFwLeaderboardsCorporationsLastWeekLastWeek, root.EveApi.GetFwLeaderboardsCorporationsYesterdayYesterday);
  }
}(this, function(ApiClient, GetFwLeaderboardsCorporationsActiveTotalActiveTotal, GetFwLeaderboardsCorporationsLastWeekLastWeek, GetFwLeaderboardsCorporationsYesterdayYesterday) {
  'use strict';

  /**
   * The GetFwLeaderboardsCorporationsKills model module.
   * @module model/GetFwLeaderboardsCorporationsKills
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCorporationsKills</code>.
   * Top 10 rankings of corporations by number of kills from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsCorporationsKills
   * @class
   * @param active_total {Array.<module:model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal>} Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @param last_week {Array.<module:model/GetFwLeaderboardsCorporationsLastWeekLastWeek>} Top 10 ranking of corporations by kills in the past week
   * @param yesterday {Array.<module:model/GetFwLeaderboardsCorporationsYesterdayYesterday>} Top 10 ranking of corporations by kills in the past day
   */
  var exports = function(active_total, last_week, yesterday) {
    this.active_total = active_total;
    this.last_week = last_week;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCorporationsKills</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCorporationsKills} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCorporationsKills} The populated <code>GetFwLeaderboardsCorporationsKills</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_total'))
        obj.active_total = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsCorporationsActiveTotalActiveTotal]);
      if (data.hasOwnProperty('last_week'))
        obj.last_week = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsCorporationsLastWeekLastWeek]);
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsCorporationsYesterdayYesterday]);
    }
    return obj;
  }

  /**
   * Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsActiveTotalActiveTotal>} active_total
   */
  exports.prototype.active_total = undefined;

  /**
   * Top 10 ranking of corporations by kills in the past week
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsLastWeekLastWeek>} last_week
   */
  exports.prototype.last_week = undefined;

  /**
   * Top 10 ranking of corporations by kills in the past day
   * @member {Array.<module:model/GetFwLeaderboardsCorporationsYesterdayYesterday>} yesterday
   */
  exports.prototype.yesterday = undefined;


  return exports;

}));
