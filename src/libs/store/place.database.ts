import Dexie from "dexie";
import { BaseDatabase } from "./base.database";

export interface PlaceModel {
  readonly id?: number;
}

export class PlaceDatabase extends BaseDatabase {
  public declare places: Dexie.Table<PlaceModel, number>;

  public constructor(name: string, schemaVersion?: number) {
    super(name, schemaVersion);

    this.conditionalVersion(1, {
      places: "++id",
    });
  }
}
