# EveApi.GetContractsPublicItemsContractId200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_blueprint_copy** | **Boolean** | is_blueprint_copy boolean | [optional] 
**is_included** | **Boolean** | true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract | 
**item_id** | **Number** | Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract | [optional] 
**material_efficiency** | **Number** | Material Efficiency Level of the blueprint | [optional] 
**quantity** | **Number** | Number of items in the stack | 
**record_id** | **Number** | Unique ID for the item, used by the contract system | 
**runs** | **Number** | Number of runs remaining if the blueprint is a copy, -1 if it is an original | [optional] 
**time_efficiency** | **Number** | Time Efficiency Level of the blueprint | [optional] 
**type_id** | **Number** | Type ID for item | 


