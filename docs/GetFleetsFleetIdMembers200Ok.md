# EveApi.GetFleetsFleetIdMembers200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_id** | **Number** | character_id integer | 
**join_time** | **Date** | join_time string | 
**role** | **String** | Member’s role in fleet | 
**role_name** | **String** | Localized role names | 
**ship_type_id** | **Number** | ship_type_id integer | 
**solar_system_id** | **Number** | Solar system the member is located in | 
**squad_id** | **Number** | ID of the squad the member is in. If not applicable, will be set to -1 | 
**station_id** | **Number** | Station in which the member is docked in, if applicable | [optional] 
**takes_fleet_warp** | **Boolean** | Whether the member take fleet warps | 
**wing_id** | **Number** | ID of the wing the member is in. If not applicable, will be set to -1 | 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `fleet_commander` (value: `"fleet_commander"`)

* `wing_commander` (value: `"wing_commander"`)

* `squad_commander` (value: `"squad_commander"`)

* `squad_member` (value: `"squad_member"`)




