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
 *  When `limit_type = CARD`, `spend_controls` must be set. When `limit type = USER`, `spend_controls` must be `null`. 
 * @export
 * @interface SpendControlRequest
 */
export interface SpendControlRequest {
    /**
     * 
     * @type {Money}
     * @memberof SpendControlRequest
     */
    'spend_limit': Money;
    /**
     *      Spend limit refresh frequency     - MONTHLY: The spend limit refreshes every month     - QUARTERLY: The spend limit refreshes every quarter     - YEARLY: The spend limit refreshes every year     - ONE_TIME: The limit does not refresh 
     * @type {SpendDuration}
     * @memberof SpendControlRequest
     */
    'spend_duration': SpendDuration;
    /**
     * 
     * @type {string}
     * @memberof SpendControlRequest
     */
    'reason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpendControlRequest
     */
    'lock_after_date'?: string | null;
    /**
     *  If using the Empower platform, a new `budget` will be created for this card. You can specify a `parent_budget` that your new `budget` will be nested under. If `parent_budget_id` is null, we will nest the new budget under the top-level account `budget`. 
     * @type {string}
     * @memberof SpendControlRequest
     */
    'parent_budget_id'?: string | null;
}

