# EveApi.DogmaApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDogmaAttributes**](DogmaApi.md#getDogmaAttributes) | **GET** /dogma/attributes/ | Get attributes
[**getDogmaAttributesAttributeId**](DogmaApi.md#getDogmaAttributesAttributeId) | **GET** /dogma/attributes/{attribute_id}/ | Get attribute information
[**getDogmaDynamicItemsTypeIdItemId**](DogmaApi.md#getDogmaDynamicItemsTypeIdItemId) | **GET** /dogma/dynamic/items/{type_id}/{item_id}/ | Get dynamic item information
[**getDogmaEffects**](DogmaApi.md#getDogmaEffects) | **GET** /dogma/effects/ | Get effects
[**getDogmaEffectsEffectId**](DogmaApi.md#getDogmaEffectsEffectId) | **GET** /dogma/effects/{effect_id}/ | Get effect information


<a name="getDogmaAttributes"></a>
# **getDogmaAttributes**
> ['Number'] getDogmaAttributes(opts)

Get attributes

Get a list of dogma attribute ids  --- Alternate route: `/dev/dogma/attributes/`  Alternate route: `/legacy/dogma/attributes/`  Alternate route: `/v1/dogma/attributes/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.DogmaApi();

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
apiInstance.getDogmaAttributes(opts, callback);
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

<a name="getDogmaAttributesAttributeId"></a>
# **getDogmaAttributesAttributeId**
> GetDogmaAttributesAttributeIdOk getDogmaAttributesAttributeId(attribute_id, opts)

Get attribute information

Get information on a dogma attribute  --- Alternate route: `/dev/dogma/attributes/{attribute_id}/`  Alternate route: `/legacy/dogma/attributes/{attribute_id}/`  Alternate route: `/v1/dogma/attributes/{attribute_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.DogmaApi();

var attribute_id = 56; // Number | A dogma attribute ID

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
apiInstance.getDogmaAttributesAttributeId(attribute_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_id** | **Number**| A dogma attribute ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetDogmaAttributesAttributeIdOk**](GetDogmaAttributesAttributeIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDogmaDynamicItemsTypeIdItemId"></a>
# **getDogmaDynamicItemsTypeIdItemId**
> GetDogmaDynamicItemsTypeIdItemIdOk getDogmaDynamicItemsTypeIdItemId(item_id, type_id, opts)

Get dynamic item information

Returns info about a dynamic item resulting from mutation with a mutaplasmid.  --- Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/`  Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/`  Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.DogmaApi();

var item_id = 789; // Number | item_id integer

var type_id = 56; // Number | type_id integer

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
apiInstance.getDogmaDynamicItemsTypeIdItemId(item_id, type_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **Number**| item_id integer | 
 **type_id** | **Number**| type_id integer | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetDogmaDynamicItemsTypeIdItemIdOk**](GetDogmaDynamicItemsTypeIdItemIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDogmaEffects"></a>
# **getDogmaEffects**
> ['Number'] getDogmaEffects(opts)

Get effects

Get a list of dogma effect ids  --- Alternate route: `/dev/dogma/effects/`  Alternate route: `/legacy/dogma/effects/`  Alternate route: `/v1/dogma/effects/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.DogmaApi();

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
apiInstance.getDogmaEffects(opts, callback);
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

<a name="getDogmaEffectsEffectId"></a>
# **getDogmaEffectsEffectId**
> GetDogmaEffectsEffectIdOk getDogmaEffectsEffectId(effect_id, opts)

Get effect information

Get information on a dogma effect  --- Alternate route: `/dev/dogma/effects/{effect_id}/`  Alternate route: `/v2/dogma/effects/{effect_id}/`  --- This route expires daily at 11:05

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.DogmaApi();

var effect_id = 56; // Number | A dogma effect ID

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
apiInstance.getDogmaEffectsEffectId(effect_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **effect_id** | **Number**| A dogma effect ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetDogmaEffectsEffectIdOk**](GetDogmaEffectsEffectIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

