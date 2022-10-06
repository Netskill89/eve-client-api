# EveApi.GetCharactersCharacterIdIndustryJobs200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **Number** | Job activity ID | 
**blueprint_id** | **Number** | blueprint_id integer | 
**blueprint_location_id** | **Number** | Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility | 
**blueprint_type_id** | **Number** | blueprint_type_id integer | 
**completed_character_id** | **Number** | ID of the character which completed this job | [optional] 
**completed_date** | **Date** | Date and time when this job was completed | [optional] 
**cost** | **Number** | The sume of job installation fee and industry facility tax | [optional] 
**duration** | **Number** | Job duration in seconds | 
**end_date** | **Date** | Date and time when this job finished | 
**facility_id** | **Number** | ID of the facility where this job is running | 
**installer_id** | **Number** | ID of the character which installed this job | 
**job_id** | **Number** | Unique job ID | 
**licensed_runs** | **Number** | Number of runs blueprint is licensed for | [optional] 
**output_location_id** | **Number** | Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility | 
**pause_date** | **Date** | Date and time when this job was paused (i.e. time when the facility where this job was installed went offline) | [optional] 
**probability** | **Number** | Chance of success for invention | [optional] 
**product_type_id** | **Number** | Type ID of product (manufactured, copied or invented) | [optional] 
**runs** | **Number** | Number of runs for a manufacturing job, or number of copies to make for a blueprint copy | 
**start_date** | **Date** | Date and time when this job started | 
**station_id** | **Number** | ID of the station where industry facility is located | 
**status** | **String** | status string | 
**successful_runs** | **Number** | Number of successful runs for this job. Equal to runs unless this is an invention job | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `cancelled` (value: `"cancelled"`)

* `delivered` (value: `"delivered"`)

* `paused` (value: `"paused"`)

* `ready` (value: `"ready"`)

* `reverted` (value: `"reverted"`)




