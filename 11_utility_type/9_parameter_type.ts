/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean) {
}

type Params = Parameters<typeof sampleFunction>; // [number, string, boolean]

type Params2 = Parameters<(one: number) => void>; // [number]

const qwerqwer: Params = [
    123, 'asfd', true
]

// 순서는 지정되었지만 readonly가 아니어서 tuple은 아니다.
const asdfasdf: Params2 = [123];
asdfasdf[0] = 234;
console.log(asdfasdf);
