/**
 * Generic in Implementation
 */

interface Singer<T, V> {
    name: T;

    sing(year: V): void;
}

class Idol implements Singer<string, number> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(year: number): void {
        console.log(`[${year}] ${this.name} 이 노래부름`);
    }
}

const yuJin = new Idol('안유진');
yuJin.sing(2003);



interface Singer<T, V> {
    name: T;

    sing(year: V): void;
}

class Idol2<T,V> implements Singer<T, V> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
    sing(year: V): void {
        console.log(`[${year}] ${this.name} 이 노래부름`);
    }
}

// 타입이 값에 의해 유추된 경우
const yuJin2 = new Idol2('홍진경');
yuJin2.sing(2004);

// 내가 명시적으로 지정한 경우
const yuJin3 = new Idol2<string, number>('홍진경');
yuJin3.sing(2004);
