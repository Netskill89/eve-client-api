# EveApi.WarsApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWars**](WarsApi.md#getWars) | **GET** /wars/ | List wars
[**getWarsWarId**](WarsApi.md#getWarsWarId) | **GET** /wars/{war_id}/ | Get war information
[**getWarsWarIdKillmails**](WarsApi.md#getWarsWarIdKillmails) | **GET** /wars/{war_id}/killmails/ | List kills for a war


<a name="getWars"></a>
# **getWars**
> ['Number'] getWars(opts)

List wars

Return a list of wars  --- Alternate route: `/dev/wars/`  Alternate route: `/legacy/wars/`  Alternate route: `/v1/wars/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.WarsApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'max_war_id': 56 // Number | Only return wars with ID smaller than this
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWars(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **max_war_id** | **Number**| Only return wars with ID smaller than this | [optional] 

### Return type

**['Number']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWarsWarId"></a>
# **getWarsWarId**
> GetWarsWarIdOk getWarsWarId(war_id, opts)

Get war information

Return details about a war  --- Alternate route: `/dev/wars/{war_id}/`  Alternate route: `/legacy/wars/{war_id}/`  Alternate route: `/v1/wars/{war_id}/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.WarsApi();

var war_id = 56; // Number | ID for a war

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
apiInstance.getWarsWarId(war_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **war_id** | **Number**| ID for a war | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetWarsWarIdOk**](GetWarsWarIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWarsWarIdKillmails"></a>
# **getWarsWarIdKillmails**
> [GetWarsWarIdKillmails200Ok] getWarsWarIdKillmails(war_id, opts)

List kills for a war

Return a list of kills related to a war  --- Alternate route: `/dev/wars/{war_id}/killmails/`  Alternate route: `/legacy/wars/{war_id}/killmails/`  Alternate route: `/v1/wars/{war_id}/killmails/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.WarsApi();

var war_id = 56; // Number | A valid war ID

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
apiInstance.getWarsWarIdKillmails(war_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **war_id** | **Number**| A valid war ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]

### Return type

[**[GetWarsWarIdKillmails200Ok]**](GetWarsWarIdKillmails200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

