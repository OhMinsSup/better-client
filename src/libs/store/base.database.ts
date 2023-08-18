import Dexie, { Transaction } from "dexie";

export abstract class BaseDatabase extends Dexie {
  private schemaVersion: number | undefined;

  public constructor(name: string, schemaVersion: number | undefined) {
    super(name);

    this.schemaVersion = schemaVersion;
  }

  protected async conditionalVersion(
    version: number,
    schema: { [key: string]: string | null },
    upgrade?: (t: Transaction) => Promise<void>
  ) {
    if (this.schemaVersion != null && this.schemaVersion < version) {
      return;
    }

    const dexieVersion = this.version(version).stores(schema);

    if (upgrade != null) {
      dexieVersion.upgrade(upgrade);
    }
  }
}
