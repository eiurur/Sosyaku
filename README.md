Sosyaku [![Build Status](https://travis-ci.org/eiurur/Sosyaku.svg?branch=master)](https://travis-ci.org/eiurur/Sosyaku)
======

### 【WIP】

![](http://img.gifmagazine.net/gifmagazine/images/488035/original.gif?1437831927)

> http://gifmagazine.net/post_images/488035

<!--

Promiseの重い処理を分割して再帰的に実行してくれるやつ。

# Installation

    npm i sosyaku -S

# Usage

```JavaScript

const dataList = ['https://~~~/1.jpg', ..., 'https://~~~/2000.jpg'];

const task = url => {
  return new Promise( (resolve, reject) => {
    // ex
    generateThumbnails(url, [30, 120, 240])
    .then( result => resolve(result) )
    .catch( err => reject(err) )
  })
};

const params = {
  skip: 0, /* default is 0 */
  limit: 20, /* default is 20 */
  dataList: dataList,
  task: task,
};
const sosyaku = new Sosyaku(params);
sosyaku.bite().then( result => console.log(result) );

```
-->