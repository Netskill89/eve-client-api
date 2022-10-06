# EveApi.IncursionsApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIncursions**](IncursionsApi.md#getIncursions) | **GET** /incursions/ | List incursions


<a name="getIncursions"></a>
# **getIncursions**
> [GetIncursions200Ok] getIncursions(opts)

List incursions

Return a list of current incursions  --- Alternate route: `/dev/incursions/`  Alternate route: `/legacy/incursions/`  Alternate route: `/v1/incursions/`  --- This route is cached for up to 300 seconds

### Example
```javascript
var EveApi = require('eve-api');

var apiInstance = new EveApi.IncursionsApi();

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
apiInstance.getIncursions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetIncursions200Ok]**](GetIncursions200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

