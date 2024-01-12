/**
 * multiple_ways_to_import_and_export
 */

// // (1) export를 사용해서 이름을 바꾸는 방법
// import {IdolModel as IM, rose, number, ICat, IdolModel} from "./2_export_1";
//
// console.log(new IM('아이유', 23));
// console.log(new IdolModel('아이유', 23));


// // (2) wildcard - *
// import * as allTogether from './2_export_1';
// console.log(allTogether.number);


// // (3) export default, export 동시에 사용
// import cf, {rose, number} from './2_export_1';
//
// console.log(cf);
// console.log(rose);
// console.log(number);

// (4) baseUrl
import {IdolModel} from "15_import_and_export/2_export_1";

IdolModel;
