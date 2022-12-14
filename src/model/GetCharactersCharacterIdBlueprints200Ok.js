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
    root.EveApi.GetCharactersCharacterIdBlueprints200Ok = factory(root.EveApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdBlueprints200Ok model module.
   * @module model/GetCharactersCharacterIdBlueprints200Ok
   * @version 1.12
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdBlueprints200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdBlueprints200Ok
   * @class
   * @param item_id {Number} Unique ID for this item.
   * @param location_flag {module:model/GetCharactersCharacterIdBlueprints200Ok.LocationFlagEnum} Type of the location_id
   * @param location_id {Number} References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   * @param material_efficiency {Number} Material Efficiency Level of the blueprint.
   * @param quantity {Number} A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @param runs {Number} Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @param time_efficiency {Number} Time Efficiency Level of the blueprint.
   * @param type_id {Number} type_id integer
   */
  var exports = function(item_id, location_flag, location_id, material_efficiency, quantity, runs, time_efficiency, type_id) {
    this.item_id = item_id;
    this.location_flag = location_flag;
    this.location_id = location_id;
    this.material_efficiency = material_efficiency;
    this.quantity = quantity;
    this.runs = runs;
    this.time_efficiency = time_efficiency;
    this.type_id = type_id;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdBlueprints200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdBlueprints200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdBlueprints200Ok} The populated <code>GetCharactersCharacterIdBlueprints200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('location_flag'))
        obj.location_flag = ApiClient.convertToType(data['location_flag'], 'String');
      if (data.hasOwnProperty('location_id'))
        obj.location_id = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('material_efficiency'))
        obj.material_efficiency = ApiClient.convertToType(data['material_efficiency'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('runs'))
        obj.runs = ApiClient.convertToType(data['runs'], 'Number');
      if (data.hasOwnProperty('time_efficiency'))
        obj.time_efficiency = ApiClient.convertToType(data['time_efficiency'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.type_id = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Unique ID for this item.
   * @member {Number} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * Type of the location_id
   * @member {module:model/GetCharactersCharacterIdBlueprints200Ok.LocationFlagEnum} location_flag
   */
  exports.prototype.location_flag = undefined;

  /**
   * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   * @member {Number} location_id
   */
  exports.prototype.location_id = undefined;

  /**
   * Material Efficiency Level of the blueprint.
   * @member {Number} material_efficiency
   */
  exports.prototype.material_efficiency = undefined;

  /**
   * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @member {Number} runs
   */
  exports.prototype.runs = undefined;

  /**
   * Time Efficiency Level of the blueprint.
   * @member {Number} time_efficiency
   */
  exports.prototype.time_efficiency = undefined;

  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype.type_id = undefined;



  /**
   * Allowed values for the <code>location_flag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationFlagEnum = {
    /**
     * value: "AutoFit"
     * @const
     */
    AutoFit: "AutoFit",

    /**
     * value: "Cargo"
     * @const
     */
    Cargo: "Cargo",

    /**
     * value: "CorpseBay"
     * @const
     */
    CorpseBay: "CorpseBay",

    /**
     * value: "DroneBay"
     * @const
     */
    DroneBay: "DroneBay",

    /**
     * value: "FleetHangar"
     * @const
     */
    FleetHangar: "FleetHangar",

    /**
     * value: "Deliveries"
     * @const
     */
    Deliveries: "Deliveries",

    /**
     * value: "HiddenModifiers"
     * @const
     */
    HiddenModifiers: "HiddenModifiers",

    /**
     * value: "Hangar"
     * @const
     */
    Hangar: "Hangar",

    /**
     * value: "HangarAll"
     * @const
     */
    HangarAll: "HangarAll",

    /**
     * value: "LoSlot0"
     * @const
     */
    LoSlot0: "LoSlot0",

    /**
     * value: "LoSlot1"
     * @const
     */
    LoSlot1: "LoSlot1",

    /**
     * value: "LoSlot2"
     * @const
     */
    LoSlot2: "LoSlot2",

    /**
     * value: "LoSlot3"
     * @const
     */
    LoSlot3: "LoSlot3",

    /**
     * value: "LoSlot4"
     * @const
     */
    LoSlot4: "LoSlot4",

    /**
     * value: "LoSlot5"
     * @const
     */
    LoSlot5: "LoSlot5",

    /**
     * value: "LoSlot6"
     * @const
     */
    LoSlot6: "LoSlot6",

    /**
     * value: "LoSlot7"
     * @const
     */
    LoSlot7: "LoSlot7",

    /**
     * value: "MedSlot0"
     * @const
     */
    MedSlot0: "MedSlot0",

    /**
     * value: "MedSlot1"
     * @const
     */
    MedSlot1: "MedSlot1",

    /**
     * value: "MedSlot2"
     * @const
     */
    MedSlot2: "MedSlot2",

    /**
     * value: "MedSlot3"
     * @const
     */
    MedSlot3: "MedSlot3",

    /**
     * value: "MedSlot4"
     * @const
     */
    MedSlot4: "MedSlot4",

    /**
     * value: "MedSlot5"
     * @const
     */
    MedSlot5: "MedSlot5",

    /**
     * value: "MedSlot6"
     * @const
     */
    MedSlot6: "MedSlot6",

    /**
     * value: "MedSlot7"
     * @const
     */
    MedSlot7: "MedSlot7",

    /**
     * value: "HiSlot0"
     * @const
     */
    HiSlot0: "HiSlot0",

    /**
     * value: "HiSlot1"
     * @const
     */
    HiSlot1: "HiSlot1",

    /**
     * value: "HiSlot2"
     * @const
     */
    HiSlot2: "HiSlot2",

    /**
     * value: "HiSlot3"
     * @const
     */
    HiSlot3: "HiSlot3",

    /**
     * value: "HiSlot4"
     * @const
     */
    HiSlot4: "HiSlot4",

    /**
     * value: "HiSlot5"
     * @const
     */
    HiSlot5: "HiSlot5",

    /**
     * value: "HiSlot6"
     * @const
     */
    HiSlot6: "HiSlot6",

    /**
     * value: "HiSlot7"
     * @const
     */
    HiSlot7: "HiSlot7",

    /**
     * value: "AssetSafety"
     * @const
     */
    AssetSafety: "AssetSafety",

    /**
     * value: "Locked"
     * @const
     */
    Locked: "Locked",

    /**
     * value: "Unlocked"
     * @const
     */
    Unlocked: "Unlocked",

    /**
     * value: "Implant"
     * @const
     */
    Implant: "Implant",

    /**
     * value: "QuafeBay"
     * @const
     */
    QuafeBay: "QuafeBay",

    /**
     * value: "RigSlot0"
     * @const
     */
    RigSlot0: "RigSlot0",

    /**
     * value: "RigSlot1"
     * @const
     */
    RigSlot1: "RigSlot1",

    /**
     * value: "RigSlot2"
     * @const
     */
    RigSlot2: "RigSlot2",

    /**
     * value: "RigSlot3"
     * @const
     */
    RigSlot3: "RigSlot3",

    /**
     * value: "RigSlot4"
     * @const
     */
    RigSlot4: "RigSlot4",

    /**
     * value: "RigSlot5"
     * @const
     */
    RigSlot5: "RigSlot5",

    /**
     * value: "RigSlot6"
     * @const
     */
    RigSlot6: "RigSlot6",

    /**
     * value: "RigSlot7"
     * @const
     */
    RigSlot7: "RigSlot7",

    /**
     * value: "ShipHangar"
     * @const
     */
    ShipHangar: "ShipHangar",

    /**
     * value: "SpecializedFuelBay"
     * @const
     */
    SpecializedFuelBay: "SpecializedFuelBay",

    /**
     * value: "SpecializedOreHold"
     * @const
     */
    SpecializedOreHold: "SpecializedOreHold",

    /**
     * value: "SpecializedGasHold"
     * @const
     */
    SpecializedGasHold: "SpecializedGasHold",

    /**
     * value: "SpecializedMineralHold"
     * @const
     */
    SpecializedMineralHold: "SpecializedMineralHold",

    /**
     * value: "SpecializedSalvageHold"
     * @const
     */
    SpecializedSalvageHold: "SpecializedSalvageHold",

    /**
     * value: "SpecializedShipHold"
     * @const
     */
    SpecializedShipHold: "SpecializedShipHold",

    /**
     * value: "SpecializedSmallShipHold"
     * @const
     */
    SpecializedSmallShipHold: "SpecializedSmallShipHold",

    /**
     * value: "SpecializedMediumShipHold"
     * @const
     */
    SpecializedMediumShipHold: "SpecializedMediumShipHold",

    /**
     * value: "SpecializedLargeShipHold"
     * @const
     */
    SpecializedLargeShipHold: "SpecializedLargeShipHold",

    /**
     * value: "SpecializedIndustrialShipHold"
     * @const
     */
    SpecializedIndustrialShipHold: "SpecializedIndustrialShipHold",

    /**
     * value: "SpecializedAmmoHold"
     * @const
     */
    SpecializedAmmoHold: "SpecializedAmmoHold",

    /**
     * value: "SpecializedCommandCenterHold"
     * @const
     */
    SpecializedCommandCenterHold: "SpecializedCommandCenterHold",

    /**
     * value: "SpecializedPlanetaryCommoditiesHold"
     * @const
     */
    SpecializedPlanetaryCommoditiesHold: "SpecializedPlanetaryCommoditiesHold",

    /**
     * value: "SpecializedMaterialBay"
     * @const
     */
    SpecializedMaterialBay: "SpecializedMaterialBay",

    /**
     * value: "SubSystemSlot0"
     * @const
     */
    SubSystemSlot0: "SubSystemSlot0",

    /**
     * value: "SubSystemSlot1"
     * @const
     */
    SubSystemSlot1: "SubSystemSlot1",

    /**
     * value: "SubSystemSlot2"
     * @const
     */
    SubSystemSlot2: "SubSystemSlot2",

    /**
     * value: "SubSystemSlot3"
     * @const
     */
    SubSystemSlot3: "SubSystemSlot3",

    /**
     * value: "SubSystemSlot4"
     * @const
     */
    SubSystemSlot4: "SubSystemSlot4",

    /**
     * value: "SubSystemSlot5"
     * @const
     */
    SubSystemSlot5: "SubSystemSlot5",

    /**
     * value: "SubSystemSlot6"
     * @const
     */
    SubSystemSlot6: "SubSystemSlot6",

    /**
     * value: "SubSystemSlot7"
     * @const
     */
    SubSystemSlot7: "SubSystemSlot7",

    /**
     * value: "FighterBay"
     * @const
     */
    FighterBay: "FighterBay",

    /**
     * value: "FighterTube0"
     * @const
     */
    FighterTube0: "FighterTube0",

    /**
     * value: "FighterTube1"
     * @const
     */
    FighterTube1: "FighterTube1",

    /**
     * value: "FighterTube2"
     * @const
     */
    FighterTube2: "FighterTube2",

    /**
     * value: "FighterTube3"
     * @const
     */
    FighterTube3: "FighterTube3",

    /**
     * value: "FighterTube4"
     * @const
     */
    FighterTube4: "FighterTube4",

    /**
     * value: "Module"
     * @const
     */
    Module: "Module"
  };

  return exports;

}));
