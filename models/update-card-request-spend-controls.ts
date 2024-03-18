/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SetUserLimitRequestMonthlyLimit } from './set-user-limit-request-monthly-limit';
import { SpendControlUpdateRequest } from './spend-control-update-request';
import { SpendDuration } from './spend-duration';

/**
 * 
 * @export
 * @interface UpdateCardRequestSpendControls
 */
export interface UpdateCardRequestSpendControls {
    /**
     * 
     * @type {SetUserLimitRequestMonthlyLimit}
     * @memberof UpdateCardRequestSpendControls
     */
    'spend_limit'?: SetUserLimitRequestMonthlyLimit;
    /**
     * 
     * @type {SpendDuration}
     * @memberof UpdateCardRequestSpendControls
     */
    'spend_duration'?: SpendDuration;
    /**
     * 
     * @type {string}
     * @memberof UpdateCardRequestSpendControls
     */
    'reason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCardRequestSpendControls
     */
    'lock_after_date'?: string | null;
}

