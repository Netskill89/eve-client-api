# EveApi.GetCorporationsCorporationIdCustomsOffices200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alliance_tax_rate** | **Number** | Only present if alliance access is allowed | [optional] 
**allow_access_with_standings** | **Boolean** | standing_level and any standing related tax rate only present when this is true | 
**allow_alliance_access** | **Boolean** | allow_alliance_access boolean | 
**bad_standing_tax_rate** | **Number** | bad_standing_tax_rate number | [optional] 
**corporation_tax_rate** | **Number** | corporation_tax_rate number | [optional] 
**excellent_standing_tax_rate** | **Number** | Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates | [optional] 
**good_standing_tax_rate** | **Number** | good_standing_tax_rate number | [optional] 
**neutral_standing_tax_rate** | **Number** | neutral_standing_tax_rate number | [optional] 
**office_id** | **Number** | unique ID of this customs office | 
**reinforce_exit_end** | **Number** | reinforce_exit_end integer | 
**reinforce_exit_start** | **Number** | Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack | 
**standing_level** | **String** | Access is allowed only for entities with this level of standing or better | [optional] 
**system_id** | **Number** | ID of the solar system this customs office is located in | 
**terrible_standing_tax_rate** | **Number** | terrible_standing_tax_rate number | [optional] 


<a name="StandingLevelEnum"></a>
## Enum: StandingLevelEnum


* `bad` (value: `"bad"`)

* `excellent` (value: `"excellent"`)

* `good` (value: `"good"`)

* `neutral` (value: `"neutral"`)

* `terrible` (value: `"terrible"`)




