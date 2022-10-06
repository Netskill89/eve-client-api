# EveApi.GetCharactersCharacterIdContractsContractIdItems200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_included** | **Boolean** | true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract | 
**is_singleton** | **Boolean** | is_singleton boolean | 
**quantity** | **Number** | Number of items in the stack | 
**raw_quantity** | **Number** | -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy | [optional] 
**record_id** | **Number** | Unique ID for the item | 
**type_id** | **Number** | Type ID for item | 


