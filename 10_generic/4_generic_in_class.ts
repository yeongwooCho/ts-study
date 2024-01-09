/**
 * Class 에서 Generic 사용하기
 */

class Pagination<Data, Message> {
    data: Data[] = []; // 데이터
    message?: Message; // 에러 메세지
    lastFetchedAt?: Date; // 마지막 요청 시간
}

const pgData = new Pagination<number, string>();
pgData.data; // number[]
pgData.message; // string | undefined
pgData.lastFetchedAt; // Date | undefined




class Pagination2<Data, Message> {
    data: Data[] = []; // 데이터
    message?: Message; // 에러 메세지
    lastFetchedAt?: Date; // 마지막 요청 시간

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pg2 = new Pagination2([123, 234]);

pg2.data; // number[]
pg2.message; // unknown
pg2.lastFetchedAt; // Date | undefined


class DefaultGeneric<T=boolean> {
    data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;