# EveApi.GetCharactersCharacterIdContacts200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **Number** | contact_id integer | 
**contact_type** | **String** | contact_type string | 
**is_blocked** | **Boolean** | Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false | [optional] 
**is_watched** | **Boolean** | Whether this contact is being watched | [optional] 
**label_ids** | **[Number]** | label_ids array | [optional] 
**standing** | **Number** | Standing of the contact | 


<a name="ContactTypeEnum"></a>
## Enum: ContactTypeEnum


* `character` (value: `"character"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)

* `faction` (value: `"faction"`)




