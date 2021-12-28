/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type2Enum
 */
export enum Type2Enum {
  Beneficiary = 'beneficiary',
  Payer = 'payer',
  Api = 'api',
  Self = 'self',
}

/**
 * Schema for Type2Enum
 */
export const type2EnumSchema: Schema<Type2Enum> = stringEnum(Type2Enum);
