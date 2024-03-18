<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The team API lets you manage users, departments, locations, and cards.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexteam.cards.createNewCard`](#brexteamcardscreatenewcard)
  * [`brexteam.cards.createSecureEmail`](#brexteamcardscreatesecureemail)
  * [`brexteam.cards.getById`](#brexteamcardsgetbyid)
  * [`brexteam.cards.getCardDetails`](#brexteamcardsgetcarddetails)
  * [`brexteam.cards.listByUserId`](#brexteamcardslistbyuserid)
  * [`brexteam.cards.lockCard`](#brexteamcardslockcard)
  * [`brexteam.cards.terminateExistingCard`](#brexteamcardsterminateexistingcard)
  * [`brexteam.cards.unlockExistingCard`](#brexteamcardsunlockexistingcard)
  * [`brexteam.cards.updateCard`](#brexteamcardsupdatecard)
  * [`brexteam.companies.getInfo`](#brexteamcompaniesgetinfo)
  * [`brexteam.departments.addNewDepartment`](#brexteamdepartmentsaddnewdepartment)
  * [`brexteam.departments.getById`](#brexteamdepartmentsgetbyid)
  * [`brexteam.departments.listAll`](#brexteamdepartmentslistall)
  * [`brexteam.locations.addNewLocation`](#brexteamlocationsaddnewlocation)
  * [`brexteam.locations.getAllLocations`](#brexteamlocationsgetalllocations)
  * [`brexteam.locations.getLocationById`](#brexteamlocationsgetlocationbyid)
  * [`brexteam.titles.createNewTitle`](#brexteamtitlescreatenewtitle)
  * [`brexteam.titles.getAll`](#brexteamtitlesgetall)
  * [`brexteam.titles.getTitleById`](#brexteamtitlesgettitlebyid)
  * [`brexteam.users.getCurrentUser`](#brexteamusersgetcurrentuser)
  * [`brexteam.users.getMonthlyLimit`](#brexteamusersgetmonthlylimit)
  * [`brexteam.users.getUserById`](#brexteamusersgetuserbyid)
  * [`brexteam.users.inviteNewEmployee`](#brexteamusersinvitenewemployee)
  * [`brexteam.users.listUsers`](#brexteamuserslistusers)
  * [`brexteam.users.setMonthlyLimit`](#brexteamuserssetmonthlylimit)
  * [`brexteam.users.updateUser`](#brexteamusersupdateuser)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Team&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexTeam } from "brex-team-typescript-sdk";

const brexteam = new BrexTeam({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
});

const createNewCardResponse = await brexteam.cards.createNewCard({
  IdempotencyKey: "IdempotencyKey_example",
  owner: {},
  card_name: "card_name_example",
  card_type: "VIRTUAL",
  limit_type: "CARD",
});

console.log(createNewCardResponse);
```

## Reference<a id="reference"></a>


### `brexteam.cards.createNewCard`<a id="brexteamcardscreatenewcard"></a>


Creates a new card.
The `spend_controls` field is required when `limit_type` = `CARD`.
The `mailing_address` field is required for physical cards and is the shipping address used to send the card; it is not the same as the billing and mailing address used for online purchases.
The first 2 lines of this address must be under 60 characters long. Each user can only have up to 10 active physical cards.
For Empower accounts, this endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned. 
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewCardResponse = await brexteam.cards.createNewCard({
  IdempotencyKey: "IdempotencyKey_example",
  owner: {},
  card_name: "card_name_example",
  card_type: "VIRTUAL",
  limit_type: "CARD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### owner: [`CardOwner`](./models/card-owner.ts)<a id="owner-cardownermodelscard-ownerts"></a>

##### card_name: `string`<a id="card_name-string"></a>

##### card_type: [`CardType`](./models/card-type.ts)<a id="card_type-cardtypemodelscard-typets"></a>

##### limit_type: [`LimitType`](./models/limit-type.ts)<a id="limit_type-limittypemodelslimit-typets"></a>

 `limit_type = CARD` for vendor cards. Vendor cards must have a `card_type` of `VIRTUAL`  and do not rely on the user specific limit.   For corporate cards, `limit_type = USER`.  Learn more about different card types [here](https://support.brex.com/what-are-the-different-types-of-cards-i-can-get/). 

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### spend_controls: [`CreateCardRequestSpendControls`](./models/create-card-request-spend-controls.ts)<a id="spend_controls-createcardrequestspendcontrolsmodelscreate-card-request-spend-controlsts"></a>

##### mailing_address: [`CardMailingAddress`](./models/card-mailing-address.ts)<a id="mailing_address-cardmailingaddressmodelscard-mailing-addressts"></a>

##### metadata: Record<string, `string`><a id="metadata-record"></a>

 Set of key value pairs associated with this object. Please do not store any personally identifiable or sensitive information here. Limitations: maximum of 50 keys, keys cannot exceed 40 characters, values cannot exceed 500 characters.  

##### card_attribute_preferences: [`CreateCardRequestCardAttributePreferences`](./models/create-card-request-card-attribute-preferences.ts)<a id="card_attribute_preferences-createcardrequestcardattributepreferencesmodelscreate-card-request-card-attribute-preferencests"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.createSecureEmail`<a id="brexteamcardscreatesecureemail"></a>


Creates a secure email to send card number, CVV, and expiration date of a card by ID to the specified email.

This endpoint is currently gated. If you would like to request access, please reach out to
developer-access@brex.com


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSecureEmailResponse = await brexteam.cards.createSecureEmail({
  id: "id_example",
  IdempotencyKey: "IdempotencyKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### recipient_email: `string`<a id="recipient_email-string"></a>

Email address to send card details to

##### sender_name: `string`<a id="sender_name-string"></a>

Sender name. Shows up in the subject of the email

##### message: `string`<a id="message-string"></a>

Message to send with the card details

##### expiry_days: `number`<a id="expiry_days-number"></a>

Link expiry in number of days. Defaults to 30

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}/secure_email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.getById`<a id="brexteamcardsgetbyid"></a>


Retrieves a card by ID. Only cards with `limit_type = CARD` have `spend_controls`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexteam.cards.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.getCardDetails`<a id="brexteamcardsgetcarddetails"></a>


Retrieves card number, CVV, and expiration date of a card by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardDetailsResponse = await brexteam.cards.getCardDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CardNumberResponse](./models/card-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}/pan` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.listByUserId`<a id="brexteamcardslistbyuserid"></a>


Lists all cards by a `user_id`.
Only cards with `limit_type = CARD` have `spend_controls`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByUserIdResponse = await brexteam.cards.listByUserId({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageCard](./models/page-card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.lockCard`<a id="brexteamcardslockcard"></a>


Locks an existing, unlocked card. And the card owner will receive a notification about it.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lockCardResponse = await brexteam.cards.lockCard({
  id: "id_example",
  reason: "CARD_DAMAGED",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason: [`ChangeCardReason`](./models/change-card-reason.ts)<a id="reason-changecardreasonmodelschange-card-reasonts"></a>

 Reason for card termination. 

##### id: `string`<a id="id-string"></a>

##### description: `string`<a id="description-string"></a>

Description for locking a card

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}/lock` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.terminateExistingCard`<a id="brexteamcardsterminateexistingcard"></a>


Terminates an existing card. The card owner will receive a notification about it.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateExistingCardResponse =
  await brexteam.cards.terminateExistingCard({
    id: "id_example",
    reason: "CARD_DAMAGED",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason: [`ChangeCardReason`](./models/change-card-reason.ts)<a id="reason-changecardreasonmodelschange-card-reasonts"></a>

 Reason for card termination. 

##### id: `string`<a id="id-string"></a>

##### description: `string`<a id="description-string"></a>

Description for terminating a card

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}/terminate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.unlockExistingCard`<a id="brexteamcardsunlockexistingcard"></a>


Unlocks an existing card.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlockExistingCardResponse = await brexteam.cards.unlockExistingCard({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}/unlock` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.cards.updateCard`<a id="brexteamcardsupdatecard"></a>


Update an existing vendor card


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCardResponse = await brexteam.cards.updateCard({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### spend_controls: [`UpdateCardRequestSpendControls`](./models/update-card-request-spend-controls.ts)<a id="spend_controls-updatecardrequestspendcontrolsmodelsupdate-card-request-spend-controlsts"></a>

##### metadata: Record<string, `string`><a id="metadata-record"></a>

 Set of key value pairs associated with this object. Please do not store any personally identifiable or sensitive information here. Limitations: maximum of 50 keys, keys cannot exceed 40 characters, values cannot exceed 500 characters.  

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Card](./models/card.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cards/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.companies.getInfo`<a id="brexteamcompaniesgetinfo"></a>


This endpoint returns the company associated with the OAuth2 access token.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await brexteam.companies.getInfo();
```

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResponse](./models/company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.departments.addNewDepartment`<a id="brexteamdepartmentsaddnewdepartment"></a>


This endpoint creates a new department


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewDepartmentResponse = await brexteam.departments.addNewDepartment({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the department

##### description: `string`<a id="description-string"></a>

Description of the department

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentResponse](./models/department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/departments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.departments.getById`<a id="brexteamdepartmentsgetbyid"></a>


This endpoint gets a department by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexteam.departments.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentResponse](./models/department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/departments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.departments.listAll`<a id="brexteamdepartmentslistall"></a>


This endpoint lists all departments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await brexteam.departments.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageDepartmentResponse](./models/page-department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.locations.addNewLocation`<a id="brexteamlocationsaddnewlocation"></a>


This endpoint creates a new location.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewLocationResponse = await brexteam.locations.addNewLocation({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the location

##### description: `string`<a id="description-string"></a>

Description of the location

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LocationResponse](./models/location-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/locations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.locations.getAllLocations`<a id="brexteamlocationsgetalllocations"></a>


This endpoint lists all locations.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllLocationsResponse = await brexteam.locations.getAllLocations({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageLocationResponse](./models/page-location-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.locations.getLocationById`<a id="brexteamlocationsgetlocationbyid"></a>


This endpoint gets a location by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationByIdResponse = await brexteam.locations.getLocationById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LocationResponse](./models/location-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/locations/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.titles.createNewTitle`<a id="brexteamtitlescreatenewtitle"></a>


This endpoint creates a new title


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTitleResponse = await brexteam.titles.createNewTitle({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the title

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TitleResponse](./models/title-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/titles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.titles.getAll`<a id="brexteamtitlesgetall"></a>


This endpoint lists all titles.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await brexteam.titles.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageTitleResponse](./models/page-title-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/titles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.titles.getTitleById`<a id="brexteamtitlesgettitlebyid"></a>


This endpoint gets a title by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTitleByIdResponse = await brexteam.titles.getTitleById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TitleResponse](./models/title-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/titles/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.getCurrentUser`<a id="brexteamusersgetcurrentuser"></a>


This endpoint returns the user associated with the OAuth2 access token.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentUserResponse = await brexteam.users.getCurrentUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.getMonthlyLimit`<a id="brexteamusersgetmonthlylimit"></a>


This endpoint gets the monthly limit for the user including the monthly available limit.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMonthlyLimitResponse = await brexteam.users.getMonthlyLimit({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserLimitResponse](./models/user-limit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{id}/limit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.getUserById`<a id="brexteamusersgetuserbyid"></a>


This endpoint gets a user by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await brexteam.users.getUserById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.inviteNewEmployee`<a id="brexteamusersinvitenewemployee"></a>


This endpoint invites a new user as an employee.
To update user's role, check out [this article](https://support.brex.com/how-do-i-change-another-user-s-role/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteNewEmployeeResponse = await brexteam.users.inviteNewEmployee({
  first_name: "first_name_example",
  last_name: "last_name_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### first_name: `string`<a id="first_name-string"></a>

##### last_name: `string`<a id="last_name-string"></a>

##### email: `string`<a id="email-string"></a>

##### manager_id: `string`<a id="manager_id-string"></a>

##### department_id: `string`<a id="department_id-string"></a>

##### location_id: `string`<a id="location_id-string"></a>

##### title_id: `string`<a id="title_id-string"></a>

##### metadata: Record<string, `string`><a id="metadata-record"></a>

The metadata or customized attributes of the user. Maximum number of entries: 100

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.listUsers`<a id="brexteamuserslistusers"></a>


This endpoint lists all users. To find a user id by email, you can filter using the `email` query parameter.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUsersResponse = await brexteam.users.listUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### email: `string`<a id="email-string"></a>

##### remoteDisplayId: `string`<a id="remotedisplayid-string"></a>

##### expand: `string`[]<a id="expand-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageUserResponse](./models/page-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.setMonthlyLimit`<a id="brexteamuserssetmonthlylimit"></a>


This endpoint sets the monthly limit for a user. 
The limit amount must be non-negative. 
To unset the monthly limit of the user, just set `monthly_limit` to null.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setMonthlyLimitResponse = await brexteam.users.setMonthlyLimit({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### monthly_limit: [`SetUserLimitRequestMonthlyLimit`](./models/set-user-limit-request-monthly-limit.ts)<a id="monthly_limit-setuserlimitrequestmonthlylimitmodelsset-user-limit-request-monthly-limitts"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserLimitResponse](./models/user-limit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{id}/limit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexteam.users.updateUser`<a id="brexteamusersupdateuser"></a>


This endpoint updates a user. Any parameters not provided will be left unchanged.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserResponse = await brexteam.users.updateUser({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### status: [`UpdateUserStatus`](./models/update-user-status.ts)<a id="status-updateuserstatusmodelsupdate-user-statusts"></a>

##### manager_id: `string`<a id="manager_id-string"></a>

The user id of the manager of this user

##### department_id: `string`<a id="department_id-string"></a>

##### location_id: `string`<a id="location_id-string"></a>

##### title_id: `string`<a id="title_id-string"></a>

##### metadata: Record<string, `string`><a id="metadata-record"></a>

The metadata or customized attributes of the user. Maximum number of entries: 100

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
