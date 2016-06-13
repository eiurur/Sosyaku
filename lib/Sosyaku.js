'use strict';

module.exports = class Sosyaku {
  constructor(params) {
    params           = params || {};
    this.skip        = params.skip || 0;
    this.limit       = params.limit || 20;
    this.interval_s    = params.interval_s || 0;
    this.dataList    = Array.isArray(params.dataList) ? params.dataList.slice() : [];
    this.task        = params.task;
    this._resultList = [];
  }

  set resultList(resultList) {
    this._resultList = resultList;
  }

  get resultList() {
    return this._resultList;
  }

  delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  bite() {
    return new Promise( (resolve, reject) => {
      if (this.dataList.length === 0) return resolve(this._resultList);

      const promises = this.dataList
        .splice(this.skip, this.limit)
        .map( (data, idx) => this.delay(this.interval_s * idx * 1000).then( _ => this.task(data) ) );
      Promise.all(promises)
      .then( resultList => {
        this._resultList = this._resultList.concat(resultList);
        resolve(this.bite());
      })
      .catch( err => reject(err) );
    });
  }
};
