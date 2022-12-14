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
    root.EveApi.GetCorporationsCorporationIdRolesHistory200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdRolesHistory200Ok model module.
   * @module model/GetCorporationsCorporationIdRolesHistory200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdRolesHistory200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdRolesHistory200Ok
   * @class
   * @param changed_at {Date} changed_at string
   * @param character_id {Number} The character whose roles are changed
   * @param issuer_id {Number} ID of the character who issued this change
   * @param new_roles {Array.<module:model/GetCorporationsCorporationIdRolesHistory200Ok.NewRolesEnum>} new_roles array
   * @param old_roles {Array.<module:model/GetCorporationsCorporationIdRolesHistory200Ok.OldRolesEnum>} old_roles array
   * @param role_type {module:model/GetCorporationsCorporationIdRolesHistory200Ok.RoleTypeEnum} role_type string
   */
  var exports = function(changed_at, character_id, issuer_id, new_roles, old_roles, role_type) {
    this.changed_at = changed_at;
    this.character_id = character_id;
    this.issuer_id = issuer_id;
    this.new_roles = new_roles;
    this.old_roles = old_roles;
    this.role_type = role_type;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdRolesHistory200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdRolesHistory200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdRolesHistory200Ok} The populated <code>GetCorporationsCorporationIdRolesHistory200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('changed_at'))
        obj.changed_at = ApiClient.convertToType(data['changed_at'], 'Date');
      if (data.hasOwnProperty('character_id'))
        obj.character_id = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('issuer_id'))
        obj.issuer_id = ApiClient.convertToType(data['issuer_id'], 'Number');
      if (data.hasOwnProperty('new_roles'))
        obj.new_roles = ApiClient.convertToType(data['new_roles'], ['String']);
      if (data.hasOwnProperty('old_roles'))
        obj.old_roles = ApiClient.convertToType(data['old_roles'], ['String']);
      if (data.hasOwnProperty('role_type'))
        obj.role_type = ApiClient.convertToType(data['role_type'], 'String');
    }
    return obj;
  }

  /**
   * changed_at string
   * @member {Date} changed_at
   */
  exports.prototype.changed_at = undefined;

  /**
   * The character whose roles are changed
   * @member {Number} character_id
   */
  exports.prototype.character_id = undefined;

  /**
   * ID of the character who issued this change
   * @member {Number} issuer_id
   */
  exports.prototype.issuer_id = undefined;

  /**
   * new_roles array
   * @member {Array.<module:model/GetCorporationsCorporationIdRolesHistory200Ok.NewRolesEnum>} new_roles
   */
  exports.prototype.new_roles = undefined;

  /**
   * old_roles array
   * @member {Array.<module:model/GetCorporationsCorporationIdRolesHistory200Ok.OldRolesEnum>} old_roles
   */
  exports.prototype.old_roles = undefined;

  /**
   * role_type string
   * @member {module:model/GetCorporationsCorporationIdRolesHistory200Ok.RoleTypeEnum} role_type
   */
  exports.prototype.role_type = undefined;



  /**
   * Allowed values for the <code>new_roles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NewRolesEnum = {
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
   * Allowed values for the <code>old_roles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OldRolesEnum = {
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
   * Allowed values for the <code>role_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleTypeEnum = {
    /**
     * value: "grantable_roles"
     * @const
     */
    grantable_roles: "grantable_roles",

    /**
     * value: "grantable_roles_at_base"
     * @const
     */
    grantable_roles_at_base: "grantable_roles_at_base",

    /**
     * value: "grantable_roles_at_hq"
     * @const
     */
    grantable_roles_at_hq: "grantable_roles_at_hq",

    /**
     * value: "grantable_roles_at_other"
     * @const
     */
    grantable_roles_at_other: "grantable_roles_at_other",

    /**
     * value: "roles"
     * @const
     */
    roles: "roles",

    /**
     * value: "roles_at_base"
     * @const
     */
    roles_at_base: "roles_at_base",

    /**
     * value: "roles_at_hq"
     * @const
     */
    roles_at_hq: "roles_at_hq",

    /**
     * value: "roles_at_other"
     * @const
     */
    roles_at_other: "roles_at_other"
  };

  return exports;

}));
