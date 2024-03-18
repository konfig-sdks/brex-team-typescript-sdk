/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { CardExpiration } from './card-expiration';
import { CardMailingAddress } from './card-mailing-address';
import { CardOwner } from './card-owner';
import { CardSpendControls } from './card-spend-controls';
import { CardStatus } from './card-status';
import { CardType } from './card-type';
import { LimitType } from './limit-type';

/**
 *  Only cards with limit_type = CARD have spend_controls 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    'id': string;
    /**
     * 
     * @type {CardOwner}
     * @memberof Card
     */
    'owner': CardOwner;
    /**
     * 
     * @type {CardStatus}
     * @memberof Card
     */
    'status'?: CardStatus;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    'last_four': string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    'card_name': string;
    /**
     * 
     * @type {CardType}
     * @memberof Card
     */
    'card_type'?: CardType;
    /**
     *  `limit_type = CARD` for vendor cards. Vendor cards must have a `card_type` of `VIRTUAL`  and do not rely on the user specific limit.   For corporate cards, `limit_type = USER`.  Learn more about different card types [here](https://support.brex.com/what-are-the-different-types-of-cards-i-can-get/). 
     * @type {LimitType}
     * @memberof Card
     */
    'limit_type': LimitType;
    /**
     * 
     * @type {CardSpendControls}
     * @memberof Card
     */
    'spend_controls'?: CardSpendControls;
    /**
     * 
     * @type {Address}
     * @memberof Card
     */
    'billing_address': Address;
    /**
     * 
     * @type {CardMailingAddress}
     * @memberof Card
     */
    'mailing_address'?: CardMailingAddress;
    /**
     * 
     * @type {CardExpiration}
     * @memberof Card
     */
    'expiration_date': CardExpiration;
    /**
     *  Set of key value pairs associated with this object. Please do not store any personally identifiable or sensitive information here. Limitations: maximum of 50 keys, keys cannot exceed 40 characters, values cannot exceed 500 characters.  
     * @type {{ [key: string]: string; }}
     * @memberof Card
     */
    'metadata'?: { [key: string]: string; } | null;
}
