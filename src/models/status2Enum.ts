/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status2Enum
 */
export enum Status2Enum {
  Verified = 'verified',
  Unverified = 'unverified',
  VerificationFailed = 'verification_failed',
}

/**
 * Schema for Status2Enum
 */
export const status2EnumSchema: Schema<Status2Enum> = stringEnum(Status2Enum);