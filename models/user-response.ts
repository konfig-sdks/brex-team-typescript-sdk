/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserStatus } from './user-status';

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'id': string;
    /**
     * First name of the user
     * @type {string}
     * @memberof UserResponse
     */
    'first_name': string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof UserResponse
     */
    'last_name': string;
    /**
     * Email address of the user
     * @type {string}
     * @memberof UserResponse
     */
    'email': string;
    /**
     * 
     * @type {UserStatus}
     * @memberof UserResponse
     */
    'status'?: UserStatus;
    /**
     * The user id of the manager of this user
     * @type {string}
     * @memberof UserResponse
     */
    'manager_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'department_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'location_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'title_id'?: string | null;
    /**
     * The metadata or customized attributes of the user. Maximum number of entries: 100
     * @type {{ [key: string]: string; }}
     * @memberof UserResponse
     */
    'metadata'?: { [key: string]: string; } | null;
    /**
     * Identifier that is displayed on the IDP or HR system, eg, if OKTA identifies you as user xyz
     * @type {string}
     * @memberof UserResponse
     */
    'remote_display_id'?: string | null;
}
