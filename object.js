let product = {
    name: 'keyboard',
    price: 1500,
    color: 'black',
    category: 'computer',
    size: 'XL',
    displayProduct: function() {
        return 'ชื่อสินค้า '+this.name + "ราคา "+this.price + 'หมวดหมู่ '+this.category
    },
    discount: function(){
        return this.price -1000;
    }
}

console.log('name ',product.name);
console.log('price ',product.price);
console.log('color ',product.color);
console.log(product.displayProduct());
console.log(product.discount());
console.log(product.displayProduct());