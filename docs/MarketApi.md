# EveApi.MarketApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdOrders**](MarketApi.md#getCharactersCharacterIdOrders) | **GET** /characters/{character_id}/orders/ | List open orders from a character
[**getCharactersCharacterIdOrdersHistory**](MarketApi.md#getCharactersCharacterIdOrdersHistory) | **GET** /characters/{character_id}/orders/history/ | List historical orders by a character
[**getCorporationsCorporationIdOrders**](MarketApi.md#getCorporationsCorporationIdOrders) | **GET** /corporations/{corporation_id}/orders/ | List open orders from a corporation
[**getCorporationsCorporationIdOrdersHistory**](MarketApi.md#getCorporationsCorporationIdOrdersHistory) | **GET** /corporations/{corporation_id}/orders/history/ | List historical orders from a corporation
[**getMarketsGroups**](MarketApi.md#getMarketsGroups) | **GET** /markets/groups/ | Get item groups
[**getMarketsGroupsMarketGroupId**](MarketApi.md#getMarketsGroupsMarketGroupId) | **GET** /markets/groups/{market_group_id}/ | Get item group information
[**getMarketsPrices**](MarketApi.md#getMarketsPrices) | **GET** /markets/prices/ | List market prices
[**getMarketsRegionIdHistory**](MarketApi.md#getMarketsRegionIdHistory) | **GET** /markets/{region_id}/history/ | List historical market statistics in a region
[**getMarketsRegionIdOrders**](MarketApi.md#getMarketsRegionIdOrders) | **GET** /markets/{region_id}/orders/ | List orders in a region
[**getMarketsRegionIdTypes**](MarketApi.md#getMarketsRegionIdTypes) | **GET** /markets/{region_id}/types/ | List type IDs relevant to a market
[**getMarketsStructuresStructureId**](MarketApi.md#getMarketsStructuresStructureId) | **GET** /markets/structures/{structure_id}/ | List orders in a structure


<a name="getCharactersCharacterIdOrders"></a>
# **getCharactersCharacterIdOrders**
> [GetCharactersCharacterIdOrders200Ok] getCharactersCharacterIdOrders(character_id, opts)

List open orders from a character

List open market orders placed by a character  --- Alternate route: `/dev/characters/{character_id}/orders/`  Alternate route: `/v2/characters/{character_id}/orders/`  --- This route is cached for up to 1200 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.MarketApi();

var character_id = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdOrders(character_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdOrders200Ok]**](GetCharactersCharacterIdOrders200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdOrdersHistory"></a>
# **getCharactersCharacterIdOrdersHistory**
> [GetCharactersCharacterIdOrdersHistory200Ok] getCharactersCharacterIdOrdersHistory(character_id, opts)

List historical orders by a character

List cancelled and expired market orders placed by a character up to 90 days in the past.  --- Alternate route: `/dev/characters/{character_id}/orders/history/`  Alternate route: `/legacy/characters/{character_id}/orders/history/`  Alternate route: `/v1/characters/{character_id}/orders/history/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.MarketApi();

var character_id = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdOrdersHistory(character_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdOrdersHistory200Ok]**](GetCharactersCharacterIdOrdersHistory200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdOrders"></a>
# **getCorporationsCorporationIdOrders**
> [GetCorporationsCorporationIdOrders200Ok] getCorporationsCorporationIdOrders(corporation_id, opts)

List open orders from a corporation

List open market orders placed on behalf of a corporation  --- Alternate route: `/dev/corporations/{corporation_id}/orders/`  Alternate route: `/v3/corporations/{corporation_id}/orders/`  --- This route is cached for up to 1200 seconds  --- Requires one of the following EVE corporation role(s): Accountant, Trader 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.MarketApi();

var corporation_id = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdOrders(corporation_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporation_id** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdOrders200Ok]**](GetCorporationsCorporationIdOrders200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdOrdersHistory"></a>
# **getCorporationsCorporationIdOrdersHistory**
> [GetCorporationsCorporationIdOrdersHistory200Ok] getCorporationsCorporationIdOrdersHistory(corporation_id, opts)

List historical orders from a corporation

List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.  --- Alternate route: `/dev/corporations/{corporation_id}/orders/history/`  Alternate route: `/v2/corporations/{corporation_id}/orders/history/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant, Trader 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.MarketApi();

var corporation_id = 56; // Number | An EVE corporation ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCorporationsCorporationIdOrdersHistory(corporation_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporation_id** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCorporationsCorporationIdOrdersHistory200Ok]**](GetCorporationsCorporationIdOrdersHistory200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsGroups"></a>
# **getMarketsGroups**
> ['Number'] getMarketsGroups(opts)

Get item groups

Get a list of item groups  --- Alternate route: `/dev/markets/groups/`  Alternate route: `/legacy/markets/groups/`  Alternate route: `/v1/markets/groups/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsGroupsMarketGroupId"></a>
# **getMarketsGroupsMarketGroupId**
> GetMarketsGroupsMarketGroupIdOk getMarketsGroupsMarketGroupId(market_group_id, opts)

Get item group information

Get information on an item group  --- Alternate route: `/dev/markets/groups/{market_group_id}/`  Alternate route: `/legacy/markets/groups/{market_group_id}/`  Alternate route: `/v1/markets/groups/{market_group_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var market_group_id = 56; // Number | An Eve item group ID

var opts = { 
  'Accept_Language': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsGroupsMarketGroupId(market_group_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market_group_id** | **Number**| An Eve item group ID | 
 **Accept_Language** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]

### Return type

[**GetMarketsGroupsMarketGroupIdOk**](GetMarketsGroupsMarketGroupIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsPrices"></a>
# **getMarketsPrices**
> [GetMarketsPrices200Ok] getMarketsPrices(opts)

List market prices

Return a list of prices  --- Alternate route: `/dev/markets/prices/`  Alternate route: `/legacy/markets/prices/`  Alternate route: `/v1/markets/prices/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsPrices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetMarketsPrices200Ok]**](GetMarketsPrices200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsRegionIdHistory"></a>
# **getMarketsRegionIdHistory**
> [GetMarketsRegionIdHistory200Ok] getMarketsRegionIdHistory(region_id, type_id, opts)

List historical market statistics in a region

Return a list of historical market statistics for the specified type in a region  --- Alternate route: `/dev/markets/{region_id}/history/`  Alternate route: `/legacy/markets/{region_id}/history/`  Alternate route: `/v1/markets/{region_id}/history/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var region_id = 56; // Number | Return statistics in this region

var type_id = 56; // Number | Return statistics for this type

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsRegionIdHistory(region_id, type_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region_id** | **Number**| Return statistics in this region | 
 **type_id** | **Number**| Return statistics for this type | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetMarketsRegionIdHistory200Ok]**](GetMarketsRegionIdHistory200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsRegionIdOrders"></a>
# **getMarketsRegionIdOrders**
> [GetMarketsRegionIdOrders200Ok] getMarketsRegionIdOrders(order_type, region_id, opts)

List orders in a region

Return a list of orders in a region  --- Alternate route: `/dev/markets/{region_id}/orders/`  Alternate route: `/legacy/markets/{region_id}/orders/`  Alternate route: `/v1/markets/{region_id}/orders/`  --- This route is cached for up to 300 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var order_type = "all"; // String | Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders

var region_id = 56; // Number | Return orders in this region

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'type_id': 56 // Number | Return orders only for this type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsRegionIdOrders(order_type, region_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_type** | **String**| Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders | [default to all]
 **region_id** | **Number**| Return orders in this region | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **type_id** | **Number**| Return orders only for this type | [optional] 

### Return type

[**[GetMarketsRegionIdOrders200Ok]**](GetMarketsRegionIdOrders200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsRegionIdTypes"></a>
# **getMarketsRegionIdTypes**
> ['Number'] getMarketsRegionIdTypes(region_id, opts)

List type IDs relevant to a market

Return a list of type IDs that have active orders in the region, for efficient market indexing.  --- Alternate route: `/dev/markets/{region_id}/types/`  Alternate route: `/legacy/markets/{region_id}/types/`  Alternate route: `/v1/markets/{region_id}/types/`  --- This route is cached for up to 600 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.MarketApi();

var region_id = 56; // Number | Return statistics in this region

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsRegionIdTypes(region_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region_id** | **Number**| Return statistics in this region | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketsStructuresStructureId"></a>
# **getMarketsStructuresStructureId**
> [GetMarketsStructuresStructureId200Ok] getMarketsStructuresStructureId(structure_id, opts)

List orders in a structure

Return all orders in a structure  --- Alternate route: `/dev/markets/structures/{structure_id}/`  Alternate route: `/legacy/markets/structures/{structure_id}/`  Alternate route: `/v1/markets/structures/{structure_id}/`  --- This route is cached for up to 300 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.MarketApi();

var structure_id = 789; // Number | Return orders in this structure

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketsStructuresStructureId(structure_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structure_id** | **Number**| Return orders in this structure | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetMarketsStructuresStructureId200Ok]**](GetMarketsStructuresStructureId200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

