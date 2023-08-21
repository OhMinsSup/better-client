import { BaseError } from "./base-error";

export const MapUnknownError = BaseError.subclass("MapUnknownError");

export const MapExistsError = BaseError.subclass("MapExistsError");

export const MapEmptyError = BaseError.subclass("MapEmptyError");
