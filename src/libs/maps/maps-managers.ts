import { MapExistsError } from "../errors/maps-error";
import { MapsManager } from "./maps-manager";

import type { MapKey } from "./maps-types";

export class MapsManagers {
  private _currentKey: string | null = null;

  private _keys: Map<string, MapKey> = new Map<string, MapKey>();

  private _managers: Map<string, MapsManager> = new Map<string, MapsManager>();

  get(key: string) {
    return this._managers.get(key);
  }

  add(key: string) {
    this.setKey(key);
    const manager = new MapsManager(key);
    this.setManager(key, manager);
    manager.setIndex(this.$currentIndex);
  }

  remove(key: string) {
    this.deleteManager(key);
    this.deleteKey(key);
  }

  setManager(key: string, manager: MapsManager) {
    if (this._managers.has(key)) {
      throw new MapExistsError(`MapsCore._managers already has ${key}`);
    }
    this._managers.set(key, manager);
  }

  deleteManager(key: string) {
    if (!this._managers.has(key)) {
      throw new MapExistsError(`MapsCore._managers does not have ${key}`);
    }
    this._managers.delete(key);
  }

  setKey(key: string) {
    this._keys.set(key, {
      key,
      used: true,
      timestamp: Date.now(),
    });

    this._currentKey = key;
  }

  deleteKey(key: string) {
    this._keys.delete(key);

    // keys의 제일 마지막 키를 가져온다.
    const lastKey = Array.from(this._keys.keys()).pop();
    this._currentKey = lastKey || null;
  }

  clear() {
    this._managers.forEach((manager) => manager.clear());
    this._managers.clear();
    this._keys.clear();
    this._currentKey = null;
  }

  // 키값을 배열로 반환하는 함수
  toArrayKeys() {
    return Array.from(this._keys.values());
  }

  // 매니저를 배열로 반환하는 함수
  toArray() {
    return Array.from(this._managers.values());
  }

  get $managers() {
    return this._managers;
  }

  get $key() {
    return this._currentKey;
  }

  get $keys() {
    return this._keys;
  }

  get $currentIndex() {
    return this.toArrayKeys().findIndex(
      (value) => value.key === this._currentKey
    );
  }

  get $nextIndex() {
    return this.$currentIndex + 1;
  }
}
