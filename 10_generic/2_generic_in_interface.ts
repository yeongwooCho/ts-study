/**
 * Generic in Interface
 *
 * Interface에서 Generic을 사용하기 좋은 형태는
 * Cache 를 만들때이다.
 */

interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2', 'data3',],
    lastUpdate: new Date(),
};

// const cache2: Cache = {
//     data: [1, 2, 3],
//     lastUpdate: new Date(),
// };

interface DefaultGeneric<T = string> {
    data: T[];
}

const cache3: DefaultGeneric = {
    data: ['123', '234', '345'],
}

