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
    root.EveApi.GetCharactersCharacterIdRolesOk = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdRolesOk model module.
   * @module model/GetCharactersCharacterIdRolesOk
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdRolesOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdRolesOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdRolesOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdRolesOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdRolesOk} The populated <code>GetCharactersCharacterIdRolesOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('roles'))
        obj.roles = ApiClient.convertToType(data['roles'], ['String']);
      if (data.hasOwnProperty('roles_at_base'))
        obj.roles_at_base = ApiClient.convertToType(data['roles_at_base'], ['String']);
      if (data.hasOwnProperty('roles_at_hq'))
        obj.roles_at_hq = ApiClient.convertToType(data['roles_at_hq'], ['String']);
      if (data.hasOwnProperty('roles_at_other'))
        obj.roles_at_other = ApiClient.convertToType(data['roles_at_other'], ['String']);
    }
    return obj;
  }

  /**
   * roles array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesEnum>} roles
   */
  exports.prototype.roles = undefined;

  /**
   * roles_at_base array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtBaseEnum>} roles_at_base
   */
  exports.prototype.roles_at_base = undefined;

  /**
   * roles_at_hq array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtHqEnum>} roles_at_hq
   */
  exports.prototype.roles_at_hq = undefined;

  /**
   * roles_at_other array
   * @member {Array.<module:model/GetCharactersCharacterIdRolesOk.RolesAtOtherEnum>} roles_at_other
   */
  exports.prototype.roles_at_other = undefined;



  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    Account_Take_1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    Account_Take_2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    Account_Take_3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    Account_Take_4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    Account_Take_5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    Account_Take_6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    Account_Take_7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    Accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    Auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    Communications_Officer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    Config_Equipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    Config_Starbase_Equipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    Container_Take_1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    Container_Take_2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    Container_Take_3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    Container_Take_4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    Container_Take_5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    Container_Take_6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    Container_Take_7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    Contract_Manager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    Diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    Director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    Factory_Manager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    Fitting_Manager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    Hangar_Query_1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    Hangar_Query_2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    Hangar_Query_3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    Hangar_Query_4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    Hangar_Query_5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    Hangar_Query_6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    Hangar_Query_7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    Hangar_Take_1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    Hangar_Take_2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    Hangar_Take_3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    Hangar_Take_4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    Hangar_Take_5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    Hangar_Take_6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    Hangar_Take_7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    Junior_Accountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    Personnel_Manager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    Rent_Factory_Facility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    Rent_Office: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    Rent_Research_Facility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    Security_Officer: "Security_Officer",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    Starbase_Defense_Operator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    Starbase_Fuel_Technician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    Station_Manager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    Trader: "Trader"
  };


  /**
   * Allowed values for the <code>roles_at_base</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtBaseEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    Account_Take_1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    Account_Take_2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    Account_Take_3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    Account_Take_4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    Account_Take_5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    Account_Take_6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    Account_Take_7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    Accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    Auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    Communications_Officer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    Config_Equipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    Config_Starbase_Equipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    Container_Take_1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    Container_Take_2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    Container_Take_3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    Container_Take_4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    Container_Take_5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    Container_Take_6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    Container_Take_7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    Contract_Manager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    Diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    Director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    Factory_Manager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    Fitting_Manager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    Hangar_Query_1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    Hangar_Query_2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    Hangar_Query_3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    Hangar_Query_4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    Hangar_Query_5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    Hangar_Query_6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    Hangar_Query_7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    Hangar_Take_1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    Hangar_Take_2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    Hangar_Take_3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    Hangar_Take_4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    Hangar_Take_5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    Hangar_Take_6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    Hangar_Take_7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    Junior_Accountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    Personnel_Manager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    Rent_Factory_Facility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    Rent_Office: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    Rent_Research_Facility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    Security_Officer: "Security_Officer",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    Starbase_Defense_Operator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    Starbase_Fuel_Technician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    Station_Manager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    Trader: "Trader"
  };


  /**
   * Allowed values for the <code>roles_at_hq</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtHqEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    Account_Take_1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    Account_Take_2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    Account_Take_3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    Account_Take_4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    Account_Take_5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    Account_Take_6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    Account_Take_7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    Accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    Auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    Communications_Officer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    Config_Equipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    Config_Starbase_Equipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    Container_Take_1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    Container_Take_2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    Container_Take_3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    Container_Take_4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    Container_Take_5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    Container_Take_6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    Container_Take_7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    Contract_Manager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    Diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    Director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    Factory_Manager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    Fitting_Manager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    Hangar_Query_1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    Hangar_Query_2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    Hangar_Query_3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    Hangar_Query_4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    Hangar_Query_5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    Hangar_Query_6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    Hangar_Query_7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    Hangar_Take_1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    Hangar_Take_2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    Hangar_Take_3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    Hangar_Take_4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    Hangar_Take_5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    Hangar_Take_6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    Hangar_Take_7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    Junior_Accountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    Personnel_Manager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    Rent_Factory_Facility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    Rent_Office: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    Rent_Research_Facility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    Security_Officer: "Security_Officer",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    Starbase_Defense_Operator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    Starbase_Fuel_Technician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    Station_Manager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    Trader: "Trader"
  };


  /**
   * Allowed values for the <code>roles_at_other</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesAtOtherEnum = {
    /**
     * value: "Account_Take_1"
     * @const
     */
    Account_Take_1: "Account_Take_1",

    /**
     * value: "Account_Take_2"
     * @const
     */
    Account_Take_2: "Account_Take_2",

    /**
     * value: "Account_Take_3"
     * @const
     */
    Account_Take_3: "Account_Take_3",

    /**
     * value: "Account_Take_4"
     * @const
     */
    Account_Take_4: "Account_Take_4",

    /**
     * value: "Account_Take_5"
     * @const
     */
    Account_Take_5: "Account_Take_5",

    /**
     * value: "Account_Take_6"
     * @const
     */
    Account_Take_6: "Account_Take_6",

    /**
     * value: "Account_Take_7"
     * @const
     */
    Account_Take_7: "Account_Take_7",

    /**
     * value: "Accountant"
     * @const
     */
    Accountant: "Accountant",

    /**
     * value: "Auditor"
     * @const
     */
    Auditor: "Auditor",

    /**
     * value: "Communications_Officer"
     * @const
     */
    Communications_Officer: "Communications_Officer",

    /**
     * value: "Config_Equipment"
     * @const
     */
    Config_Equipment: "Config_Equipment",

    /**
     * value: "Config_Starbase_Equipment"
     * @const
     */
    Config_Starbase_Equipment: "Config_Starbase_Equipment",

    /**
     * value: "Container_Take_1"
     * @const
     */
    Container_Take_1: "Container_Take_1",

    /**
     * value: "Container_Take_2"
     * @const
     */
    Container_Take_2: "Container_Take_2",

    /**
     * value: "Container_Take_3"
     * @const
     */
    Container_Take_3: "Container_Take_3",

    /**
     * value: "Container_Take_4"
     * @const
     */
    Container_Take_4: "Container_Take_4",

    /**
     * value: "Container_Take_5"
     * @const
     */
    Container_Take_5: "Container_Take_5",

    /**
     * value: "Container_Take_6"
     * @const
     */
    Container_Take_6: "Container_Take_6",

    /**
     * value: "Container_Take_7"
     * @const
     */
    Container_Take_7: "Container_Take_7",

    /**
     * value: "Contract_Manager"
     * @const
     */
    Contract_Manager: "Contract_Manager",

    /**
     * value: "Diplomat"
     * @const
     */
    Diplomat: "Diplomat",

    /**
     * value: "Director"
     * @const
     */
    Director: "Director",

    /**
     * value: "Factory_Manager"
     * @const
     */
    Factory_Manager: "Factory_Manager",

    /**
     * value: "Fitting_Manager"
     * @const
     */
    Fitting_Manager: "Fitting_Manager",

    /**
     * value: "Hangar_Query_1"
     * @const
     */
    Hangar_Query_1: "Hangar_Query_1",

    /**
     * value: "Hangar_Query_2"
     * @const
     */
    Hangar_Query_2: "Hangar_Query_2",

    /**
     * value: "Hangar_Query_3"
     * @const
     */
    Hangar_Query_3: "Hangar_Query_3",

    /**
     * value: "Hangar_Query_4"
     * @const
     */
    Hangar_Query_4: "Hangar_Query_4",

    /**
     * value: "Hangar_Query_5"
     * @const
     */
    Hangar_Query_5: "Hangar_Query_5",

    /**
     * value: "Hangar_Query_6"
     * @const
     */
    Hangar_Query_6: "Hangar_Query_6",

    /**
     * value: "Hangar_Query_7"
     * @const
     */
    Hangar_Query_7: "Hangar_Query_7",

    /**
     * value: "Hangar_Take_1"
     * @const
     */
    Hangar_Take_1: "Hangar_Take_1",

    /**
     * value: "Hangar_Take_2"
     * @const
     */
    Hangar_Take_2: "Hangar_Take_2",

    /**
     * value: "Hangar_Take_3"
     * @const
     */
    Hangar_Take_3: "Hangar_Take_3",

    /**
     * value: "Hangar_Take_4"
     * @const
     */
    Hangar_Take_4: "Hangar_Take_4",

    /**
     * value: "Hangar_Take_5"
     * @const
     */
    Hangar_Take_5: "Hangar_Take_5",

    /**
     * value: "Hangar_Take_6"
     * @const
     */
    Hangar_Take_6: "Hangar_Take_6",

    /**
     * value: "Hangar_Take_7"
     * @const
     */
    Hangar_Take_7: "Hangar_Take_7",

    /**
     * value: "Junior_Accountant"
     * @const
     */
    Junior_Accountant: "Junior_Accountant",

    /**
     * value: "Personnel_Manager"
     * @const
     */
    Personnel_Manager: "Personnel_Manager",

    /**
     * value: "Rent_Factory_Facility"
     * @const
     */
    Rent_Factory_Facility: "Rent_Factory_Facility",

    /**
     * value: "Rent_Office"
     * @const
     */
    Rent_Office: "Rent_Office",

    /**
     * value: "Rent_Research_Facility"
     * @const
     */
    Rent_Research_Facility: "Rent_Research_Facility",

    /**
     * value: "Security_Officer"
     * @const
     */
    Security_Officer: "Security_Officer",

    /**
     * value: "Starbase_Defense_Operator"
     * @const
     */
    Starbase_Defense_Operator: "Starbase_Defense_Operator",

    /**
     * value: "Starbase_Fuel_Technician"
     * @const
     */
    Starbase_Fuel_Technician: "Starbase_Fuel_Technician",

    /**
     * value: "Station_Manager"
     * @const
     */
    Station_Manager: "Station_Manager",

    /**
     * value: "Trader"
     * @const
     */
    Trader: "Trader"
  };

  return exports;

}));