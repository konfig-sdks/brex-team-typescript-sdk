/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Money } from './money';
import { SpendControl } from './spend-control';
import { SpendDuration } from './spend-duration';

/**
 * 
 * @export
 * @interface CardSpendControls
 */
export interface CardSpendControls {
    /**
     * 
     * @type {Money}
     * @memberof CardSpendControls
     */
    'spend_limit': Money;
    /**
     * 
     * @type {Money}
     * @memberof CardSpendControls
     */
    'spend_available': Money;
    /**
     * 
     * @type {SpendDuration}
     * @memberof CardSpendControls
     */
    'spend_duration'?: SpendDuration;
    /**
     * 
     * @type {string}
     * @memberof CardSpendControls
     */
    'reason'?: string | null;
    /**
     * The `lock_after_date` is in UTC.
     * @type {string}
     * @memberof CardSpendControls
     */
    'lock_after_date'?: string | null;
}

