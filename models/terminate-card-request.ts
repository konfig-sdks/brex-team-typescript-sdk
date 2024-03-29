/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChangeCardReason } from './change-card-reason';

/**
 * Parameters for terminating a card.
 * @export
 * @interface TerminateCardRequest
 */
export interface TerminateCardRequest {
    /**
     * Description for terminating a card
     * @type {string}
     * @memberof TerminateCardRequest
     */
    'description'?: string | null;
    /**
     *  Reason for card termination. 
     * @type {ChangeCardReason}
     * @memberof TerminateCardRequest
     */
    'reason': ChangeCardReason;
}

