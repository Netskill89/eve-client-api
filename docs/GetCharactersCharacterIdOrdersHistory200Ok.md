# EveApi.GetCharactersCharacterIdOrdersHistory200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **Number** | Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration | 
**escrow** | **Number** | For buy orders, the amount of ISK in escrow | [optional] 
**is_buy_order** | **Boolean** | True if the order is a bid (buy) order | [optional] 
**is_corporation** | **Boolean** | Signifies whether the buy/sell order was placed on behalf of a corporation. | 
**issued** | **Date** | Date and time when this order was issued | 
**location_id** | **Number** | ID of the location where order was placed | 
**min_volume** | **Number** | For buy orders, the minimum quantity that will be accepted in a matching sell order | [optional] 
**order_id** | **Number** | Unique order ID | 
**price** | **Number** | Cost per unit for this order | 
**range** | **String** | Valid order range, numbers are ranges in jumps | 
**region_id** | **Number** | ID of the region where order was placed | 
**state** | **String** | Current order state | 
**type_id** | **Number** | The type ID of the item transacted in this order | 
**volume_remain** | **Number** | Quantity of items still required or offered | 
**volume_total** | **Number** | Quantity of items required or offered at time order was placed | 


<a name="RangeEnum"></a>
## Enum: RangeEnum


* `_1` (value: `"1"`)

* `_10` (value: `"10"`)

* `_2` (value: `"2"`)

* `_20` (value: `"20"`)

* `_3` (value: `"3"`)

* `_30` (value: `"30"`)

* `_4` (value: `"4"`)

* `_40` (value: `"40"`)

* `_5` (value: `"5"`)

* `region` (value: `"region"`)

* `solarsystem` (value: `"solarsystem"`)

* `station` (value: `"station"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `cancelled` (value: `"cancelled"`)

* `expired` (value: `"expired"`)




