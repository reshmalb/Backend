const fs = require('fs');
const path = require('path');
const errorController = require('./controllers/error');

const db=require('../util/database')





const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // save() {
  //   getProductsFromFile(products => {
  //     products.push(this);
  //     fs.writeFile(p, JSON.stringify(products), err => {
  //       console.log(err);
  //     });
  //   });
  // }

  // static fetchAll(cb) {
  //   getProductsFromFile(cb);
  // }
  static fetchAll() {
    return db.execute('select * from products')
  }
};
