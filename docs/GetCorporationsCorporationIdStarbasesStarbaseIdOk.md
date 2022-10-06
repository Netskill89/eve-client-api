# EveApi.GetCorporationsCorporationIdStarbasesStarbaseIdOk

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_alliance_members** | **Boolean** | allow_alliance_members boolean | 
**allow_corporation_members** | **Boolean** | allow_corporation_members boolean | 
**anchor** | **String** | Who can anchor starbase (POS) and its structures | 
**attack_if_at_war** | **Boolean** | attack_if_at_war boolean | 
**attack_if_other_security_status_dropping** | **Boolean** | attack_if_other_security_status_dropping boolean | 
**attack_security_status_threshold** | **Number** | Starbase (POS) will attack if target's security standing is lower than this value | [optional] 
**attack_standing_threshold** | **Number** | Starbase (POS) will attack if target's standing is lower than this value | [optional] 
**fuel_bay_take** | **String** | Who can take fuel blocks out of the starbase (POS)'s fuel bay | 
**fuel_bay_view** | **String** | Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme | 
**fuels** | [**[GetCorporationsCorporationIdStarbasesStarbaseIdFuel]**](GetCorporationsCorporationIdStarbasesStarbaseIdFuel.md) | Fuel blocks and other things that will be consumed when operating a starbase (POS) | [optional] 
**offline** | **String** | Who can offline starbase (POS) and its structures | 
**online** | **String** | Who can online starbase (POS) and its structures | 
**unanchor** | **String** | Who can unanchor starbase (POS) and its structures | 
**use_alliance_standings** | **Boolean** | True if the starbase (POS) is using alliance standings, otherwise using corporation's | 


<a name="AnchorEnum"></a>
## Enum: AnchorEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




<a name="FuelBayTakeEnum"></a>
## Enum: FuelBayTakeEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




<a name="FuelBayViewEnum"></a>
## Enum: FuelBayViewEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




<a name="OfflineEnum"></a>
## Enum: OfflineEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




<a name="OnlineEnum"></a>
## Enum: OnlineEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




<a name="UnanchorEnum"></a>
## Enum: UnanchorEnum


* `alliance_member` (value: `"alliance_member"`)

* `config_starbase_equipment_role` (value: `"config_starbase_equipment_role"`)

* `corporation_member` (value: `"corporation_member"`)

* `starbase_fuel_technician_role` (value: `"starbase_fuel_technician_role"`)




