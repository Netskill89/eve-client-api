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
    root.EveApi.GetCorporationsCorporationIdIndustryJobs200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdIndustryJobs200Ok model module.
   * @module model/GetCorporationsCorporationIdIndustryJobs200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdIndustryJobs200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdIndustryJobs200Ok
   * @class
   * @param activity_id {Number} Job activity ID
   * @param blueprint_id {Number} blueprint_id integer
   * @param blueprint_location_id {Number} Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
   * @param blueprint_type_id {Number} blueprint_type_id integer
   * @param duration {Number} Job duration in seconds
   * @param end_date {Date} Date and time when this job finished
   * @param facility_id {Number} ID of the facility where this job is running
   * @param installer_id {Number} ID of the character which installed this job
   * @param job_id {Number} Unique job ID
   * @param location_id {Number} ID of the location for the industry facility
   * @param output_location_id {Number} Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
   * @param runs {Number} Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
   * @param start_date {Date} Date and time when this job started
   * @param status {module:model/GetCorporationsCorporationIdIndustryJobs200Ok.StatusEnum} status string
   */
  var exports = function(activity_id, blueprint_id, blueprint_location_id, blueprint_type_id, duration, end_date, facility_id, installer_id, job_id, location_id, output_location_id, runs, start_date, status) {
    this.activity_id = activity_id;
    this.blueprint_id = blueprint_id;
    this.blueprint_location_id = blueprint_location_id;
    this.blueprint_type_id = blueprint_type_id;
    this.duration = duration;
    this.end_date = end_date;
    this.facility_id = facility_id;
    this.installer_id = installer_id;
    this.job_id = job_id;
    this.location_id = location_id;
    this.output_location_id = output_location_id;
    this.runs = runs;
    this.start_date = start_date;
    this.status = status;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdIndustryJobs200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdIndustryJobs200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdIndustryJobs200Ok} The populated <code>GetCorporationsCorporationIdIndustryJobs200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activity_id'))
        obj.activity_id = ApiClient.convertToType(data['activity_id'], 'Number');
      if (data.hasOwnProperty('blueprint_id'))
        obj.blueprint_id = ApiClient.convertToType(data['blueprint_id'], 'Number');
      if (data.hasOwnProperty('blueprint_location_id'))
        obj.blueprint_location_id = ApiClient.convertToType(data['blueprint_location_id'], 'Number');
      if (data.hasOwnProperty('blueprint_type_id'))
        obj.blueprint_type_id = ApiClient.convertToType(data['blueprint_type_id'], 'Number');
      if (data.hasOwnProperty('completed_character_id'))
        obj.completed_character_id = ApiClient.convertToType(data['completed_character_id'], 'Number');
      if (data.hasOwnProperty('completed_date'))
        obj.completed_date = ApiClient.convertToType(data['completed_date'], 'Date');
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.end_date = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('facility_id'))
        obj.facility_id = ApiClient.convertToType(data['facility_id'], 'Number');
      if (data.hasOwnProperty('installer_id'))
        obj.installer_id = ApiClient.convertToType(data['installer_id'], 'Number');
      if (data.hasOwnProperty('job_id'))
        obj.job_id = ApiClient.convertToType(data['job_id'], 'Number');
      if (data.hasOwnProperty('licensed_runs'))
        obj.licensed_runs = ApiClient.convertToType(data['licensed_runs'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.location_id = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('output_location_id'))
        obj.output_location_id = ApiClient.convertToType(data['output_location_id'], 'Number');
      if (data.hasOwnProperty('pause_date'))
        obj.pause_date = ApiClient.convertToType(data['pause_date'], 'Date');
      if (data.hasOwnProperty('probability'))
        obj.probability = ApiClient.convertToType(data['probability'], 'Number');
      if (data.hasOwnProperty('product_type_id'))
        obj.product_type_id = ApiClient.convertToType(data['product_type_id'], 'Number');
      if (data.hasOwnProperty('runs'))
        obj.runs = ApiClient.convertToType(data['runs'], 'Number');
      if (data.hasOwnProperty('start_date'))
        obj.start_date = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('successful_runs'))
        obj.successful_runs = ApiClient.convertToType(data['successful_runs'], 'Number');
    }
    return obj;
  }

  /**
   * Job activity ID
   * @member {Number} activity_id
   */
  exports.prototype.activity_id = undefined;

  /**
   * blueprint_id integer
   * @member {Number} blueprint_id
   */
  exports.prototype.blueprint_id = undefined;

  /**
   * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
   * @member {Number} blueprint_location_id
   */
  exports.prototype.blueprint_location_id = undefined;

  /**
   * blueprint_type_id integer
   * @member {Number} blueprint_type_id
   */
  exports.prototype.blueprint_type_id = undefined;

  /**
   * ID of the character which completed this job
   * @member {Number} completed_character_id
   */
  exports.prototype.completed_character_id = undefined;

  /**
   * Date and time when this job was completed
   * @member {Date} completed_date
   */
  exports.prototype.completed_date = undefined;

  /**
   * The sume of job installation fee and industry facility tax
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Job duration in seconds
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * Date and time when this job finished
   * @member {Date} end_date
   */
  exports.prototype.end_date = undefined;

  /**
   * ID of the facility where this job is running
   * @member {Number} facility_id
   */
  exports.prototype.facility_id = undefined;

  /**
   * ID of the character which installed this job
   * @member {Number} installer_id
   */
  exports.prototype.installer_id = undefined;

  /**
   * Unique job ID
   * @member {Number} job_id
   */
  exports.prototype.job_id = undefined;

  /**
   * Number of runs blueprint is licensed for
   * @member {Number} licensed_runs
   */
  exports.prototype.licensed_runs = undefined;

  /**
   * ID of the location for the industry facility
   * @member {Number} location_id
   */
  exports.prototype.location_id = undefined;

  /**
   * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
   * @member {Number} output_location_id
   */
  exports.prototype.output_location_id = undefined;

  /**
   * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
   * @member {Date} pause_date
   */
  exports.prototype.pause_date = undefined;

  /**
   * Chance of success for invention
   * @member {Number} probability
   */
  exports.prototype.probability = undefined;

  /**
   * Type ID of product (manufactured, copied or invented)
   * @member {Number} product_type_id
   */
  exports.prototype.product_type_id = undefined;

  /**
   * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
   * @member {Number} runs
   */
  exports.prototype.runs = undefined;

  /**
   * Date and time when this job started
   * @member {Date} start_date
   */
  exports.prototype.start_date = undefined;

  /**
   * status string
   * @member {module:model/GetCorporationsCorporationIdIndustryJobs200Ok.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Number of successful runs for this job. Equal to runs unless this is an invention job
   * @member {Number} successful_runs
   */
  exports.prototype.successful_runs = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    active: "active",

    /**
     * value: "cancelled"
     * @const
     */
    cancelled: "cancelled",

    /**
     * value: "delivered"
     * @const
     */
    delivered: "delivered",

    /**
     * value: "paused"
     * @const
     */
    paused: "paused",

    /**
     * value: "ready"
     * @const
     */
    ready: "ready",

    /**
     * value: "reverted"
     * @const
     */
    reverted: "reverted"
  };

  return exports;

}));
