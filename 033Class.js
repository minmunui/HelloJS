class Cart {
    constructor() {         // constructor is declared by using key word 'constructor()'. 생성자는 constructor() 키워드를 통해 선언될 수 있다.
        this.store = {};
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: 'LapTop'})
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);