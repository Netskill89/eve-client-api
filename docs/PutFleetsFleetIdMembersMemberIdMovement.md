# EveApi.PutFleetsFleetIdMembersMemberIdMovement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **String** | If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified. | 
**squad_id** | **Number** | squad_id integer | [optional] 
**wing_id** | **Number** | wing_id integer | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `fleet_commander` (value: `"fleet_commander"`)

* `wing_commander` (value: `"wing_commander"`)

* `squad_commander` (value: `"squad_commander"`)

* `squad_member` (value: `"squad_member"`)




