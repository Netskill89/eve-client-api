# EveApi.GetCorporationsCorporationIdStarbases200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moon_id** | **Number** | The moon this starbase (POS) is anchored on, unanchored POSes do not have this information | [optional] 
**onlined_since** | **Date** | When the POS onlined, for starbases (POSes) in online state | [optional] 
**reinforced_until** | **Date** | When the POS will be out of reinforcement, for starbases (POSes) in reinforced state | [optional] 
**starbase_id** | **Number** | Unique ID for this starbase (POS) | 
**state** | **String** | state string | [optional] 
**system_id** | **Number** | The solar system this starbase (POS) is in, unanchored POSes have this information | 
**type_id** | **Number** | Starbase (POS) type | 
**unanchor_at** | **Date** | When the POS started unanchoring, for starbases (POSes) in unanchoring state | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `offline` (value: `"offline"`)

* `online` (value: `"online"`)

* `onlining` (value: `"onlining"`)

* `reinforced` (value: `"reinforced"`)

* `unanchoring` (value: `"unanchoring"`)




