/**
 * Abstract class
 * 인스턴스화를 할 수 없다.
 */


abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class Product extends ModelWithId {}

const product = new Product(1);
product.id;




abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return '굳굳';
    }
}

