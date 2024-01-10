/**
 * Template Literal Types
 * string type 을 조작할때 사용한다.
 */

type CodeFactory = 'Code Factory';

// Uppercase: 모두 대문자
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase: 모두 소문자
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize: 젤 앞글자 대문자
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize: capitalize 취소
type CodeFactoryUnCapital1 = Uncapitalize<CodeFactoryUpper>;
type CodeFactoryUnCapital2 = Uncapitalize<CodeFactoryLower>;
type CodeFactoryUnCapital3 = Uncapitalize<CodeFactoryCapital>;

