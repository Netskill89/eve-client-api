# EveApi.FleetsApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFleetsFleetIdMembersMemberId**](FleetsApi.md#deleteFleetsFleetIdMembersMemberId) | **DELETE** /fleets/{fleet_id}/members/{member_id}/ | Kick fleet member
[**deleteFleetsFleetIdSquadsSquadId**](FleetsApi.md#deleteFleetsFleetIdSquadsSquadId) | **DELETE** /fleets/{fleet_id}/squads/{squad_id}/ | Delete fleet squad
[**deleteFleetsFleetIdWingsWingId**](FleetsApi.md#deleteFleetsFleetIdWingsWingId) | **DELETE** /fleets/{fleet_id}/wings/{wing_id}/ | Delete fleet wing
[**getCharactersCharacterIdFleet**](FleetsApi.md#getCharactersCharacterIdFleet) | **GET** /characters/{character_id}/fleet/ | Get character fleet info
[**getFleetsFleetId**](FleetsApi.md#getFleetsFleetId) | **GET** /fleets/{fleet_id}/ | Get fleet information
[**getFleetsFleetIdMembers**](FleetsApi.md#getFleetsFleetIdMembers) | **GET** /fleets/{fleet_id}/members/ | Get fleet members
[**getFleetsFleetIdWings**](FleetsApi.md#getFleetsFleetIdWings) | **GET** /fleets/{fleet_id}/wings/ | Get fleet wings
[**postFleetsFleetIdMembers**](FleetsApi.md#postFleetsFleetIdMembers) | **POST** /fleets/{fleet_id}/members/ | Create fleet invitation
[**postFleetsFleetIdWings**](FleetsApi.md#postFleetsFleetIdWings) | **POST** /fleets/{fleet_id}/wings/ | Create fleet wing
[**postFleetsFleetIdWingsWingIdSquads**](FleetsApi.md#postFleetsFleetIdWingsWingIdSquads) | **POST** /fleets/{fleet_id}/wings/{wing_id}/squads/ | Create fleet squad
[**putFleetsFleetId**](FleetsApi.md#putFleetsFleetId) | **PUT** /fleets/{fleet_id}/ | Update fleet
[**putFleetsFleetIdMembersMemberId**](FleetsApi.md#putFleetsFleetIdMembersMemberId) | **PUT** /fleets/{fleet_id}/members/{member_id}/ | Move fleet member
[**putFleetsFleetIdSquadsSquadId**](FleetsApi.md#putFleetsFleetIdSquadsSquadId) | **PUT** /fleets/{fleet_id}/squads/{squad_id}/ | Rename fleet squad
[**putFleetsFleetIdWingsWingId**](FleetsApi.md#putFleetsFleetIdWingsWingId) | **PUT** /fleets/{fleet_id}/wings/{wing_id}/ | Rename fleet wing


<a name="deleteFleetsFleetIdMembersMemberId"></a>
# **deleteFleetsFleetIdMembersMemberId**
> deleteFleetsFleetIdMembersMemberId(fleet_id, member_id, opts)

Kick fleet member

Kick a fleet member  --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`  Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var member_id = 56; // Number | The character ID of a member in this fleet

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
apiInstance.deleteFleetsFleetIdMembersMemberId(fleet_id, member_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **member_id** | **Number**| The character ID of a member in this fleet | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFleetsFleetIdSquadsSquadId"></a>
# **deleteFleetsFleetIdSquadsSquadId**
> deleteFleetsFleetIdSquadsSquadId(fleet_id, squad_id, opts)

Delete fleet squad

Delete a fleet squad, only empty squads can be deleted  --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`  Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var squad_id = 789; // Number | The squad to delete

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
apiInstance.deleteFleetsFleetIdSquadsSquadId(fleet_id, squad_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **squad_id** | **Number**| The squad to delete | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFleetsFleetIdWingsWingId"></a>
# **deleteFleetsFleetIdWingsWingId**
> deleteFleetsFleetIdWingsWingId(fleet_id, wing_id, opts)

Delete fleet wing

Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty  --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`  Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var wing_id = 789; // Number | The wing to delete

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
apiInstance.deleteFleetsFleetIdWingsWingId(fleet_id, wing_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **wing_id** | **Number**| The wing to delete | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdFleet"></a>
# **getCharactersCharacterIdFleet**
> GetCharactersCharacterIdFleetOk getCharactersCharacterIdFleet(character_id, opts)

Get character fleet info

Return the fleet ID the character is in, if any.  --- Alternate route: `/legacy/characters/{character_id}/fleet/`  Alternate route: `/v1/characters/{character_id}/fleet/`  --- This route is cached for up to 60 seconds  --- Warning: This route has an upgrade available  --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/fleet/)

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

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
apiInstance.getCharactersCharacterIdFleet(character_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **character_id** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdFleetOk**](GetCharactersCharacterIdFleetOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetsFleetId"></a>
# **getFleetsFleetId**
> GetFleetsFleetIdOk getFleetsFleetId(fleet_id, opts)

Get fleet information

Return details about a fleet  --- Alternate route: `/dev/fleets/{fleet_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/`  Alternate route: `/v1/fleets/{fleet_id}/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

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
apiInstance.getFleetsFleetId(fleet_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetFleetsFleetIdOk**](GetFleetsFleetIdOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetsFleetIdMembers"></a>
# **getFleetsFleetIdMembers**
> [GetFleetsFleetIdMembers200Ok] getFleetsFleetIdMembers(fleet_id, opts)

Get fleet members

Return information about fleet members  --- Alternate route: `/dev/fleets/{fleet_id}/members/`  Alternate route: `/legacy/fleets/{fleet_id}/members/`  Alternate route: `/v1/fleets/{fleet_id}/members/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var opts = { 
  'Accept_Language': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetsFleetIdMembers(fleet_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **Accept_Language** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetFleetsFleetIdMembers200Ok]**](GetFleetsFleetIdMembers200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetsFleetIdWings"></a>
# **getFleetsFleetIdWings**
> [GetFleetsFleetIdWings200Ok] getFleetsFleetIdWings(fleet_id, opts)

Get fleet wings

Return information about wings in a fleet  --- Alternate route: `/dev/fleets/{fleet_id}/wings/`  Alternate route: `/legacy/fleets/{fleet_id}/wings/`  Alternate route: `/v1/fleets/{fleet_id}/wings/`  --- This route is cached for up to 5 seconds

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var opts = { 
  'Accept_Language': "en", // String | Language to use in the response
  'datasource': "tranquility", // String | The server name you would like data from
  'If_None_Match': "If_None_Match_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'language': "en" // String | Language to use in the response, takes precedence over Accept-Language
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetsFleetIdWings(fleet_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **Accept_Language** | **String**| Language to use in the response | [optional] [default to en]
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **If_None_Match** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **language** | **String**| Language to use in the response, takes precedence over Accept-Language | [optional] [default to en]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetFleetsFleetIdWings200Ok]**](GetFleetsFleetIdWings200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFleetsFleetIdMembers"></a>
# **postFleetsFleetIdMembers**
> postFleetsFleetIdMembers(fleet_id, invitation, opts)

Create fleet invitation

Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI  --- Alternate route: `/dev/fleets/{fleet_id}/members/`  Alternate route: `/legacy/fleets/{fleet_id}/members/`  Alternate route: `/v1/fleets/{fleet_id}/members/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var invitation = new EveApi.PostFleetsFleetIdMembersInvitation(); // PostFleetsFleetIdMembersInvitation | Details of the invitation

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
apiInstance.postFleetsFleetIdMembers(fleet_id, invitation, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **invitation** | [**PostFleetsFleetIdMembersInvitation**](PostFleetsFleetIdMembersInvitation.md)| Details of the invitation | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFleetsFleetIdWings"></a>
# **postFleetsFleetIdWings**
> PostFleetsFleetIdWingsCreated postFleetsFleetIdWings(fleet_id, opts)

Create fleet wing

Create a new wing in a fleet  --- Alternate route: `/dev/fleets/{fleet_id}/wings/`  Alternate route: `/legacy/fleets/{fleet_id}/wings/`  Alternate route: `/v1/fleets/{fleet_id}/wings/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

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
apiInstance.postFleetsFleetIdWings(fleet_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**PostFleetsFleetIdWingsCreated**](PostFleetsFleetIdWingsCreated.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFleetsFleetIdWingsWingIdSquads"></a>
# **postFleetsFleetIdWingsWingIdSquads**
> PostFleetsFleetIdWingsWingIdSquadsCreated postFleetsFleetIdWingsWingIdSquads(fleet_id, wing_id, opts)

Create fleet squad

Create a new squad in a fleet  --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`  Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`  Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var wing_id = 789; // Number | The wing_id to create squad in

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
apiInstance.postFleetsFleetIdWingsWingIdSquads(fleet_id, wing_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **wing_id** | **Number**| The wing_id to create squad in | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**PostFleetsFleetIdWingsWingIdSquadsCreated**](PostFleetsFleetIdWingsWingIdSquadsCreated.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFleetsFleetId"></a>
# **putFleetsFleetId**
> putFleetsFleetId(fleet_id, new_settings, opts)

Update fleet

Update settings about a fleet  --- Alternate route: `/dev/fleets/{fleet_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/`  Alternate route: `/v1/fleets/{fleet_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var new_settings = new EveApi.PutFleetsFleetIdNewSettings(); // PutFleetsFleetIdNewSettings | What to update for this fleet

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
apiInstance.putFleetsFleetId(fleet_id, new_settings, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **new_settings** | [**PutFleetsFleetIdNewSettings**](PutFleetsFleetIdNewSettings.md)| What to update for this fleet | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFleetsFleetIdMembersMemberId"></a>
# **putFleetsFleetIdMembersMemberId**
> putFleetsFleetIdMembersMemberId(fleet_id, member_id, movement, opts)

Move fleet member

Move a fleet member around  --- Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`  Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var member_id = 56; // Number | The character ID of a member in this fleet

var movement = new EveApi.PutFleetsFleetIdMembersMemberIdMovement(); // PutFleetsFleetIdMembersMemberIdMovement | Details of the invitation

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
apiInstance.putFleetsFleetIdMembersMemberId(fleet_id, member_id, movement, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **member_id** | **Number**| The character ID of a member in this fleet | 
 **movement** | [**PutFleetsFleetIdMembersMemberIdMovement**](PutFleetsFleetIdMembersMemberIdMovement.md)| Details of the invitation | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFleetsFleetIdSquadsSquadId"></a>
# **putFleetsFleetIdSquadsSquadId**
> putFleetsFleetIdSquadsSquadId(fleet_id, naming, squad_id, opts)

Rename fleet squad

Rename a fleet squad  --- Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`  Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var naming = new EveApi.PutFleetsFleetIdSquadsSquadIdNaming(); // PutFleetsFleetIdSquadsSquadIdNaming | New name of the squad

var squad_id = 789; // Number | The squad to rename

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
apiInstance.putFleetsFleetIdSquadsSquadId(fleet_id, naming, squad_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **naming** | [**PutFleetsFleetIdSquadsSquadIdNaming**](PutFleetsFleetIdSquadsSquadIdNaming.md)| New name of the squad | 
 **squad_id** | **Number**| The squad to rename | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFleetsFleetIdWingsWingId"></a>
# **putFleetsFleetIdWingsWingId**
> putFleetsFleetIdWingsWingId(fleet_id, naming, wing_id, opts)

Rename fleet wing

Rename a fleet wing  --- Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`  Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`  Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/` 

### Example
```javascript
var EveApi = require('eve-api');
var defaultClient = EveApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveApi.FleetsApi();

var fleet_id = 789; // Number | ID for a fleet

var naming = new EveApi.PutFleetsFleetIdWingsWingIdNaming(); // PutFleetsFleetIdWingsWingIdNaming | New name of the wing

var wing_id = 789; // Number | The wing to rename

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
apiInstance.putFleetsFleetIdWingsWingId(fleet_id, naming, wing_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fleet_id** | **Number**| ID for a fleet | 
 **naming** | [**PutFleetsFleetIdWingsWingIdNaming**](PutFleetsFleetIdWingsWingIdNaming.md)| New name of the wing | 
 **wing_id** | **Number**| The wing to rename | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

null (empty response body)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

