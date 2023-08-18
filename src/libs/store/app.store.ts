import { PlaceDatabase } from "./place.database";
import { PlaceStore } from "./place.store";
import { ScheduleDatabase } from "./schedule.database";
import { ScheduleStore } from "./schedule.store";

const placeStore = new PlaceStore(new PlaceDatabase("better-app:place"));

const scheduleStore = new ScheduleStore(
  new ScheduleDatabase("better-app:schedule")
);

export class AppStore {
  public constructor(
    private readonly $placeStore: PlaceStore,
    private readonly $scheduleStore: ScheduleStore
  ) {}
}

export const appStore = new AppStore(placeStore, scheduleStore);
