/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationResponse } from './location-response';

/**
 * 
 * @export
 * @interface PageLocationResponse
 */
export interface PageLocationResponse {
    /**
     * 
     * @type {string}
     * @memberof PageLocationResponse
     */
    'next_cursor'?: string | null;
    /**
     * 
     * @type {Array<LocationResponse>}
     * @memberof PageLocationResponse
     */
    'items': Array<LocationResponse>;
}
