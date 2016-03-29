'use strict';

module.exports = class Sosyaku {
  constructor(params) {
    params           = params || {};
    this.skip        = params.skip || 0;
    this.limit       = params.limit || 20;
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

  bite() {
    return new Promise( (resolve, reject) => {
      if (this.dataList.length === 0) return resolve('Fin');

      const promises = this.dataList.splice(this.skip, this.limit).map( data => this.task(data) );
      Promise.all(promises)
      .then( resultList => {
        this._resultList　= this._resultList.concat(resultList);
        resolve(this.bite());
      })
      .catch( err => reject(err) );
    });
  }
};
