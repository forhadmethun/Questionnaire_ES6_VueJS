let productCart = [
    { productname:'iphone-x',qty:10, price:1000 },
    { productname:'macbook pro',qty:200, price:2000},
    { productname:'iwatch',qty:100, price:550 },
    { productname:'macbook air',qty:100, price:1000},
    { productname:'iphone 8',qty:300, price:700 },
    { productname:'iphone 7',qty:100, price:550 },
    { productname:'ipad Retina',qty:20, price:1000},
    { productname:'ipad', qty:10, price:700 },
    { productname:'Magic Mouse',qty:50, price:300},
    { productname:'Magic Trackpad',qty:75, price:200}
];

const costOfProductForQtyGreaterThan = n =>
    productCart
    .filter(product => product.qty > n)
    .map(product => product.price)
    .reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
// console.log(costOfProductForQtyGreaterThan(100));

const costOfProduct = productName =>
    productCart
        .filter(product => product.productname == productName)
        .map(product => product.price * product.qty)
        .reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
console.log(costOfProduct('ipad'))