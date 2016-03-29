'use strict';

const _       = require('lodash');
const assert  = require('power-assert');
const Sosyaku = require('../');

const DATA_LENGTH = 100;

describe('Sosyaku Normal', () => {
  beforeEach( (done) => {
    this.dataList = Array.from(Array(DATA_LENGTH).keys()); // [0..99];
    this.task = a => {
      return new Promise( resolve => resolve(a) );
    };
    done();
  });

  it('should done task when pass normal parameters', (done) => {
    const params = {
      skip: 0,
      limit: 20,
      dataList: this.dataList,
      task: this.task,
    };
    const sosyaku = new Sosyaku(params);
    sosyaku.bite()
    .then( result => {
      assert(result === 'Fin');
      assert(_.isArray(sosyaku.resultList));
      assert(this.dataList.length === DATA_LENGTH);
      done();
    });
  });

  it('should done task when dont pass other than task function', (done) => {
    const params = {
      task: this.task,
    };
    const sosyaku = new Sosyaku(params);
    sosyaku.bite()
    .then( result => {
      assert(result === 'Fin');
      done();
    });
  });

  it('should done task when pass invalid value of skip', (done) => {
    const params = {
      skip: DATA_LENGTH + DATA_LENGTH,
      task: this.task,
    };
    const sosyaku = new Sosyaku(params);
    sosyaku.bite()
    .then( result => {
      assert(result === 'Fin');
      done();
    });
  });

  it('should done task when pass invalid value of limit', (done) => {
    const params = {
      limit: DATA_LENGTH + DATA_LENGTH,
      task: this.task,
    };
    const sosyaku = new Sosyaku(params);
    sosyaku.bite()
    .then( result => {
      assert(result === 'Fin');
      done();
    });
  });
});
