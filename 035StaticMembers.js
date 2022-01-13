class Product {
    static build(name, price) { // By using key word static, you can define method 
        const id = Math.floor(Math.random() * 1000);    // Math.random() return a number between 0.0 ~ 1.0
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('Gum', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, 'Clothes', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);

class ProductWithCode{
    static get CODE_PREFIX() { // by using get CODE_PREFIX(), we can get CODE_PREFIC variable
        return "PRODUCT-";
    }

    constructor(id) {
        this.id;
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);