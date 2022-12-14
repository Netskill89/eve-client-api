# EveApi.AssetsApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdAssets**](AssetsApi.md#getCharactersCharacterIdAssets) | **GET** /characters/{character_id}/assets/ | Get character assets
[**getCorporationsCorporationIdAssets**](AssetsApi.md#getCorporationsCorporationIdAssets) | **GET** /corporations/{corporation_id}/assets/ | Get corporation assets
[**postCharactersCharacterIdAssetsLocations**](AssetsApi.md#postCharactersCharacterIdAssetsLocations) | **POST** /characters/{character_id}/assets/locations/ | Get character asset locations
[**postCharactersCharacterIdAssetsNames**](AssetsApi.md#postCharactersCharacterIdAssetsNames) | **POST** /characters/{character_id}/assets/names/ | Get character asset names
[**postCorporationsCorporationIdAssetsLocations**](AssetsApi.md#postCorporationsCorporationIdAssetsLocations) | **POST** /corporations/{corporation_id}/assets/locations/ | Get corporation asset locations
[**postCorporationsCorporationIdAssetsNames**](AssetsApi.md#postCorporationsCorporationIdAssetsNames) | **POST** /corporations/{corporation_id}/assets/names/ | Get corporation asset names


<a name="getCharactersCharacterIdAssets"></a>
# **getCharactersCharacterIdAssets**
> [GetCharactersCharacterIdAssets200Ok] getCharactersCharacterIdAssets(character_id, opts)

Get character assets

Return a list of the characters assets  --- Alternate route: `/dev/characters/{character_id}/assets/`  Alternate route: `/v5/characters/{character_id}/assets/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

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
apiInstance.getCharactersCharacterIdAssets(character_id, opts, callback);
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

[**[GetCharactersCharacterIdAssets200Ok]**](GetCharactersCharacterIdAssets200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCorporationsCorporationIdAssets"></a>
# **getCorporationsCorporationIdAssets**
> [GetCorporationsCorporationIdAssets200Ok] getCorporationsCorporationIdAssets(corporation_id, opts)

Get corporation assets

Return a list of the corporation assets  --- Alternate route: `/dev/corporations/{corporation_id}/assets/`  Alternate route: `/v5/corporations/{corporation_id}/assets/`  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

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
apiInstance.getCorporationsCorporationIdAssets(corporation_id, opts, callback);
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

[**[GetCorporationsCorporationIdAssets200Ok]**](GetCorporationsCorporationIdAssets200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCharactersCharacterIdAssetsLocations"></a>
# **postCharactersCharacterIdAssetsLocations**
> [PostCharactersCharacterIdAssetsLocations200Ok] postCharactersCharacterIdAssetsLocations(character_iditem_ids, opts)

Get character asset locations

Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: `/dev/characters/{character_id}/assets/locations/`  Alternate route: `/v2/characters/{character_id}/assets/locations/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

var character_id = 56; // Number | An EVE character ID

var item_ids = [new EveApi.[Number]()]; // [Number] | A list of item ids

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCharactersCharacterIdAssetsLocations(character_iditem_ids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **item_ids** | **[Number]**| A list of item ids | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[PostCharactersCharacterIdAssetsLocations200Ok]**](PostCharactersCharacterIdAssetsLocations200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCharactersCharacterIdAssetsNames"></a>
# **postCharactersCharacterIdAssetsNames**
> [PostCharactersCharacterIdAssetsNames200Ok] postCharactersCharacterIdAssetsNames(character_iditem_ids, opts)

Get character asset names

Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.  --- Alternate route: `/dev/characters/{character_id}/assets/names/`  Alternate route: `/legacy/characters/{character_id}/assets/names/`  Alternate route: `/v1/characters/{character_id}/assets/names/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

var character_id = 56; // Number | An EVE character ID

var item_ids = [new EveApi.[Number]()]; // [Number] | A list of item ids

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCharactersCharacterIdAssetsNames(character_iditem_ids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **item_ids** | **[Number]**| A list of item ids | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[PostCharactersCharacterIdAssetsNames200Ok]**](PostCharactersCharacterIdAssetsNames200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCorporationsCorporationIdAssetsLocations"></a>
# **postCorporationsCorporationIdAssetsLocations**
> [PostCorporationsCorporationIdAssetsLocations200Ok] postCorporationsCorporationIdAssetsLocations(corporation_iditem_ids, opts)

Get corporation asset locations

Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)  --- Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`  Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`   --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

var corporation_id = 56; // Number | An EVE corporation ID

var item_ids = [new EveApi.[Number]()]; // [Number] | A list of item ids

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCorporationsCorporationIdAssetsLocations(corporation_iditem_ids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporation_id** | **Number**| An EVE corporation ID | 
 **item_ids** | **[Number]**| A list of item ids | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[PostCorporationsCorporationIdAssetsLocations200Ok]**](PostCorporationsCorporationIdAssetsLocations200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCorporationsCorporationIdAssetsNames"></a>
# **postCorporationsCorporationIdAssetsNames**
> [PostCorporationsCorporationIdAssetsNames200Ok] postCorporationsCorporationIdAssetsNames(corporation_iditem_ids, opts)

Get corporation asset names

Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships  --- Alternate route: `/dev/corporations/{corporation_id}/assets/names/`  Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`  Alternate route: `/v1/corporations/{corporation_id}/assets/names/`   --- Requires one of the following EVE corporation role(s): Director 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.AssetsApi();

var corporation_id = 56; // Number | An EVE corporation ID

var item_ids = [new EveApi.[Number]()]; // [Number] | A list of item ids

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCorporationsCorporationIdAssetsNames(corporation_iditem_ids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporation_id** | **Number**| An EVE corporation ID | 
 **item_ids** | **[Number]**| A list of item ids | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[PostCorporationsCorporationIdAssetsNames200Ok]**](PostCorporationsCorporationIdAssetsNames200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

