/*
Team API


The team API lets you manage users, departments, locations, and cards.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OwnerType } from './owner-type';
import { UserOwner } from './user-owner';

/**
 * @type CardOwner
 * @export
 */
export type CardOwner = { type: 'USER' } & UserOwner;


