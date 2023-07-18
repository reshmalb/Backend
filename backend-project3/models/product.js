  const products=[];

  module.exports = class Products{
    constructor(t){
        this.title=t;
    }
    save(){
        products.push(this);
    }
    static fetchALl(){
        return products;
    }
  }