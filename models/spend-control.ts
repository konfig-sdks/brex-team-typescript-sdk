/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Money } from './money';
import { SpendDuration } from './spend-duration';

/**
 * 
 * @export
 * @interface SpendControl
 */
export interface SpendControl {
    /**
     * 
     * @type {Money}
     * @memberof SpendControl
     */
    'spend_limit': Money;
    /**
     * 
     * @type {Money}
     * @memberof SpendControl
     */
    'spend_available': Money;
    /**
     * 
     * @type {SpendDuration}
     * @memberof SpendControl
     */
    'spend_duration'?: SpendDuration;
    /**
     * 
     * @type {string}
     * @memberof SpendControl
     */
    'reason'?: string | null;
    /**
     * The `lock_after_date` is in UTC.
     * @type {string}
     * @memberof SpendControl
     */
    'lock_after_date'?: string | null;
}
