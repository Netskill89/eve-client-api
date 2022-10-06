# EveApi.CalendarApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdCalendar**](CalendarApi.md#getCharactersCharacterIdCalendar) | **GET** /characters/{character_id}/calendar/ | List calendar event summaries
[**getCharactersCharacterIdCalendarEventId**](CalendarApi.md#getCharactersCharacterIdCalendarEventId) | **GET** /characters/{character_id}/calendar/{event_id}/ | Get an event
[**getCharactersCharacterIdCalendarEventIdAttendees**](CalendarApi.md#getCharactersCharacterIdCalendarEventIdAttendees) | **GET** /characters/{character_id}/calendar/{event_id}/attendees/ | Get attendees
[**putCharactersCharacterIdCalendarEventId**](CalendarApi.md#putCharactersCharacterIdCalendarEventId) | **PUT** /characters/{character_id}/calendar/{event_id}/ | Respond to an event


<a name="getCharactersCharacterIdCalendar"></a>
# **getCharactersCharacterIdCalendar**
> [GetCharactersCharacterIdCalendar200Ok] getCharactersCharacterIdCalendar(character_id, opts)

List calendar event summaries

Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event  --- Alternate route: `/dev/characters/{character_id}/calendar/`  Alternate route: `/legacy/characters/{character_id}/calendar/`  Alternate route: `/v1/characters/{character_id}/calendar/`  Alternate route: `/v2/characters/{character_id}/calendar/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.CalendarApi();

var character_id = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'from_event': 56, // Number | The event ID to retrieve events from
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
apiInstance.getCharactersCharacterIdCalendar(character_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **from_event** | **Number**| The event ID to retrieve events from | [optional] 
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdCalendar200Ok]**](GetCharactersCharacterIdCalendar200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdCalendarEventId"></a>
# **getCharactersCharacterIdCalendarEventId**
> GetCharactersCharacterIdCalendarEventIdOk getCharactersCharacterIdCalendarEventId(character_idevent_id, opts)

Get an event

Get all the information for a specific event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.CalendarApi();

var character_id = 56; // Number | An EVE character ID

var event_id = 56; // Number | The id of the event requested

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
apiInstance.getCharactersCharacterIdCalendarEventId(character_idevent_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **event_id** | **Number**| The id of the event requested | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdCalendarEventIdOk**](GetCharactersCharacterIdCalendarEventIdOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdCalendarEventIdAttendees"></a>
# **getCharactersCharacterIdCalendarEventIdAttendees**
> [GetCharactersCharacterIdCalendarEventIdAttendees200Ok] getCharactersCharacterIdCalendarEventIdAttendees(character_idevent_id, opts)

Get attendees

Get all invited attendees for a given event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`  Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/`  --- This route is cached for up to 600 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.CalendarApi();

var character_id = 56; // Number | An EVE character ID

var event_id = 56; // Number | The id of the event requested

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
apiInstance.getCharactersCharacterIdCalendarEventIdAttendees(character_idevent_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **event_id** | **Number**| The id of the event requested | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdCalendarEventIdAttendees200Ok]**](GetCharactersCharacterIdCalendarEventIdAttendees200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCharactersCharacterIdCalendarEventId"></a>
# **putCharactersCharacterIdCalendarEventId**
> putCharactersCharacterIdCalendarEventId(character_idevent_id, response, opts)

Respond to an event

Set your response status to an event  --- Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`  Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.CalendarApi();

var character_id = 56; // Number | An EVE character ID

var event_id = 56; // Number | The ID of the event requested

var response = new EveApi.PutCharactersCharacterIdCalendarEventIdResponse(); // PutCharactersCharacterIdCalendarEventIdResponse | The response value to set, overriding current value

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putCharactersCharacterIdCalendarEventId(character_idevent_id, response, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **event_id** | **Number**| The ID of the event requested | 
 **response** | [**PutCharactersCharacterIdCalendarEventIdResponse**](PutCharactersCharacterIdCalendarEventIdResponse.md)| The response value to set, overriding current value | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

