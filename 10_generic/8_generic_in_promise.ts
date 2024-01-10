/**
 * Generic in Promise
 */

const afterTwoSeconds = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 2000);
    })
}

const runner = async function () {
    const resp = await afterTwoSeconds();
    console.log(resp);
}

runner();

// // then을 이용해 resolve를 받는 방법
// afterTwoSeconds()
//     .then((data) => {
//        console.log(data);
//     });


const afterOneSecond = function () {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
        }, 1000);
    })
};

const runner2 = async function () {
    const res = await afterOneSecond();
    console.log(res);
}

runner2();


const runner3 = async function() {
    return 'string return';
}
runner3(); // : Promise<"string return">