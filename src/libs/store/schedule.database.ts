import Dexie from "dexie";
import { BaseDatabase } from "./base.database";

export interface ScheduleModel {
  readonly id?: number;
}

export class ScheduleDatabase extends BaseDatabase {
  public declare places: Dexie.Table<ScheduleModel, number>;

  public constructor(name: string, schemaVersion?: number) {
    super(name, schemaVersion);

    this.conditionalVersion(1, {
      places: "++id",
    });
  }
}
