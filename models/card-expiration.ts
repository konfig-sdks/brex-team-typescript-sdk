/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 *  Card expiration year and month. Cards expire on the last day of the expiration month.  The expiration date is in UTC for cards starting with 555671, 428803 and 485932. And the expiration date is in PST for cards starting with 511572. 
 * @export
 * @interface CardExpiration
 */
export interface CardExpiration {
    /**
     * 
     * @type {number}
     * @memberof CardExpiration
     */
    'month': number;
    /**
     * 
     * @type {number}
     * @memberof CardExpiration
     */
    'year': number;
}

