/**
 * Infer keyword
 * 추론하다, 미루다
 *
 * (inferring Type in Conditional type)
 * 조건부 타입에서 추론한 타입.
 *
 * infer keyword는 conditional type 에서만 사용 가능한 키워드다.
 * 그러니 extends keyword를 사용했을때 extend 한 대상에서
 * 타입을 한번 더 추론하는 역할을한다.
 */

/**
 * 1) 가장 많이 사용하는 예제
 * Flattening: Array를 벗겨내는 것
 * string[] -> string
 * string[][] -> string[]
 */

// Type extends Array<string>
// 상속 받는다. : 앞의 것은 뒤에것의 한 유형이다. 고놈이 고놈이다.
type Flatten<Type> = Type extends Array<string> ? string : Type;

type StringArray = Flatten<string[]>; // string - flattening
type NumberArray = Flatten<number[]>; // number[]


// 모든 타입에 대해서 flattening 하는 타입을 만들고 싶다.
type Flatten2<Type, ElementType> = Type extends Array<ElementType> ? ElementType : Type;

type StringArray2 = Flatten2<string[], string>; // string - flattening
type NumberArray2 = Flatten2<number[], number>; // number - flattening


// Array를 추론만 하면 되는데 반복적으로 타입을 넣어준다.
// 모든 타입에 대해서 flattening 하는 타입을 (효율적이게)만들고 싶다.
// infer keyword(추론하라 키워드) - generic type으로 선언하지 않아도 내부에서 타입을 알아서 추론하라!
type Flatten3<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten4<Type> = Type extends (infer ElementType)[] ? ElementType : Type; // 같은 코드이다.


type StringArray3 = Flatten3<string[]>; // string
type NumberArray3 = Flatten3<number[]>; // number
// 들어오는 타입이 Array 의 유형을 띈 자식 타입이 들어왔으면
// 내부 타입을 추론하고 그 추론한 타입으로 반환해라.
// 그게 아니면, 들어온 타입 그대로 반환해라.

type NumberArray4 = Flatten4<number[]>; // number


/**
 * 2) Return Type inference
 */
type InferReturnType<Type> = Type extends () => string ? string : Type;

type NumberArray10 = InferReturnType<number[]>; // number[]
type StringFunc = InferReturnType<() => string>; // string
type NumberFunc = InferReturnType<() => number>; // () => number

type InferReturnType2<Type> = Type extends () => infer ReturnType ? ReturnType : Type;
type StringFunc2 = InferReturnType2<() => string>; // string
type NumberFunc2 = InferReturnType2<() => number>; // number
