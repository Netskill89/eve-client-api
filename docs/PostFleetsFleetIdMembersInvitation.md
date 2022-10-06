# EveApi.PostFleetsFleetIdMembersInvitation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_id** | **Number** | The character you want to invite | 
**role** | **String** | If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions. | 
**squad_id** | **Number** | squad_id integer | [optional] 
**wing_id** | **Number** | wing_id integer | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `fleet_commander` (value: `"fleet_commander"`)

* `wing_commander` (value: `"wing_commander"`)

* `squad_commander` (value: `"squad_commander"`)

* `squad_member` (value: `"squad_member"`)




