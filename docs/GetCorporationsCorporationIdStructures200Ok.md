# EveApi.GetCorporationsCorporationIdStructures200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corporation_id** | **Number** | ID of the corporation that owns the structure | 
**fuel_expires** | **Date** | Date on which the structure will run out of fuel | [optional] 
**name** | **String** | The structure name | [optional] 
**next_reinforce_apply** | **Date** | The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect | [optional] 
**next_reinforce_hour** | **Number** | The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply | [optional] 
**profile_id** | **Number** | The id of the ACL profile for this citadel | 
**reinforce_hour** | **Number** | The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property | [optional] 
**services** | [**[GetCorporationsCorporationIdStructuresService]**](GetCorporationsCorporationIdStructuresService.md) | Contains a list of service upgrades, and their state | [optional] 
**state** | **String** | state string | 
**state_timer_end** | **Date** | Date at which the structure will move to it's next state | [optional] 
**state_timer_start** | **Date** | Date at which the structure entered it's current state | [optional] 
**structure_id** | **Number** | The Item ID of the structure | 
**system_id** | **Number** | The solar system the structure is in | 
**type_id** | **Number** | The type id of the structure | 
**unanchors_at** | **Date** | Date at which the structure will unanchor | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `anchor_vulnerable` (value: `"anchor_vulnerable"`)

* `anchoring` (value: `"anchoring"`)

* `armor_reinforce` (value: `"armor_reinforce"`)

* `armor_vulnerable` (value: `"armor_vulnerable"`)

* `deploy_vulnerable` (value: `"deploy_vulnerable"`)

* `fitting_invulnerable` (value: `"fitting_invulnerable"`)

* `hull_reinforce` (value: `"hull_reinforce"`)

* `hull_vulnerable` (value: `"hull_vulnerable"`)

* `online_deprecated` (value: `"online_deprecated"`)

* `onlining_vulnerable` (value: `"onlining_vulnerable"`)

* `shield_vulnerable` (value: `"shield_vulnerable"`)

* `unanchored` (value: `"unanchored"`)

* `unknown` (value: `"unknown"`)




