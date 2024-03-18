/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UpdateUserStatus } from './update-user-status';

/**
 * 
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * 
     * @type {UpdateUserStatus}
     * @memberof UpdateUserRequest
     */
    'status'?: UpdateUserStatus;
    /**
     * The user id of the manager of this user
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'manager_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'department_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'location_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'title_id'?: string | null;
    /**
     * The metadata or customized attributes of the user. Maximum number of entries: 100
     * @type {{ [key: string]: string; }}
     * @memberof UpdateUserRequest
     */
    'metadata'?: { [key: string]: string; } | null;
}

