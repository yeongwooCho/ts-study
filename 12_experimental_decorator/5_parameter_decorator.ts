/**
 * Parameter Decorator
 */

class Cat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(@LogParam adj: string) {
        console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
    }
}

function LogParam(
    target: any,
    propertyKey: string,
    paramIndex: number) {
    // paramIndex 는 말그대로 파라미터의 순서이다.
    console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 정의되었습니다.`)
}


// const cat = new Cat('냥이');
// cat.dance('신나게');

