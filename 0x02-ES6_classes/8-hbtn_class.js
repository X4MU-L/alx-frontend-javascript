/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = size;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
