# EveApi.GetSovereigntyCampaigns200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attackers_score** | **Number** | Score for all attacking parties, only present in Defense Events.  | [optional] 
**campaign_id** | **Number** | Unique ID for this campaign. | 
**constellation_id** | **Number** | The constellation in which the campaign will take place.  | 
**defender_id** | **Number** | Defending alliance, only present in Defense Events  | [optional] 
**defender_score** | **Number** | Score for the defending alliance, only present in Defense Events.  | [optional] 
**event_type** | **String** | Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \"Defense Events\", station_freeport as \"Freeport Events\".  | 
**participants** | [**[GetSovereigntyCampaignsParticipant]**](GetSovereigntyCampaignsParticipant.md) | Alliance participating and their respective scores, only present in Freeport Events.  | [optional] 
**solar_system_id** | **Number** | The solar system the structure is located in.  | 
**start_time** | **Date** | Time the event is scheduled to start.  | 
**structure_id** | **Number** | The structure item ID that is related to this campaign.  | 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `tcu_defense` (value: `"tcu_defense"`)

* `ihub_defense` (value: `"ihub_defense"`)

* `station_defense` (value: `"station_defense"`)

* `station_freeport` (value: `"station_freeport"`)




