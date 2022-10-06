# EveApi.GetCharactersCharacterIdContracts200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptor_id** | **Number** | Who will accept the contract | 
**assignee_id** | **Number** | ID to whom the contract is assigned, can be alliance, corporation or character ID | 
**availability** | **String** | To whom the contract is available | 
**buyout** | **Number** | Buyout price (for Auctions only) | [optional] 
**collateral** | **Number** | Collateral price (for Couriers only) | [optional] 
**contract_id** | **Number** | contract_id integer | 
**date_accepted** | **Date** | Date of confirmation of contract | [optional] 
**date_completed** | **Date** | Date of completed of contract | [optional] 
**date_expired** | **Date** | Expiration date of the contract | 
**date_issued** | **Date** | Сreation date of the contract | 
**days_to_complete** | **Number** | Number of days to perform the contract | [optional] 
**end_location_id** | **Number** | End location ID (for Couriers contract) | [optional] 
**for_corporation** | **Boolean** | true if the contract was issued on behalf of the issuer's corporation | 
**issuer_corporation_id** | **Number** | Character's corporation ID for the issuer | 
**issuer_id** | **Number** | Character ID for the issuer | 
**price** | **Number** | Price of contract (for ItemsExchange and Auctions) | [optional] 
**reward** | **Number** | Remuneration for contract (for Couriers only) | [optional] 
**start_location_id** | **Number** | Start location ID (for Couriers contract) | [optional] 
**status** | **String** | Status of the the contract | 
**title** | **String** | Title of the contract | [optional] 
**type** | **String** | Type of the contract | 
**volume** | **Number** | Volume of items in the contract | [optional] 


<a name="AvailabilityEnum"></a>
## Enum: AvailabilityEnum


* `_public` (value: `"public"`)

* `personal` (value: `"personal"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `outstanding` (value: `"outstanding"`)

* `in_progress` (value: `"in_progress"`)

* `finished_issuer` (value: `"finished_issuer"`)

* `finished_contractor` (value: `"finished_contractor"`)

* `finished` (value: `"finished"`)

* `cancelled` (value: `"cancelled"`)

* `rejected` (value: `"rejected"`)

* `failed` (value: `"failed"`)

* `deleted` (value: `"deleted"`)

* `reversed` (value: `"reversed"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `unknown` (value: `"unknown"`)

* `item_exchange` (value: `"item_exchange"`)

* `auction` (value: `"auction"`)

* `courier` (value: `"courier"`)

* `loan` (value: `"loan"`)




