import {MMKV} from 'react-native-mmkv';

type KeyValue = {
  isRefreshing: boolean;
  accessToken: string;
  accessTokenKyc: string;
  welcomeSound: boolean;
  baseUrl: string;
};

class Storage extends MMKV {
  getValue<K extends keyof KeyValue, V extends KeyValue[K] | undefined>(key: K): V {
    switch (key) {
      // boolean
      case 'welcomeSound':
        return super.getBoolean(key) as V;
      // string
      case 'accessToken':
      case 'accessTokenKyc':
      case 'baseUrl':
        return super.getString(key) as V;
      // object
      default:
        return this.getObject(key) as V;
    }
  }

  setValue<K extends keyof KeyValue>(key: K, value: KeyValue[K]) {
    switch (typeof value) {
      case 'boolean':
      case 'string':
      case 'number':
        return super.set(key, value);
      default:
        return this.setObject(key, value);
    }
  }

  delete(key: keyof KeyValue) {
    return super.delete(key);
  }

  private setObject(key: string, object: object) {
    try {
      const jsonString = JSON.stringify(object);
      super.set(key, jsonString);
    } catch (error) {}
  }

  private getObject(key: string) {
    try {
      const jsonString = super.getString(key);
      if (jsonString) {
        return JSON.parse(jsonString);
      }
      throw new Error(`No value for key: ${key}`);
    } catch (error) {
      return undefined;
    }
  }
}

const storage = new Storage();

export default storage;
