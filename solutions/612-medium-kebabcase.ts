/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  `FooBarBaz` -> `foo-bar-baz`

  > View on GitHub: https://tsch.js.org/612
*/


/* _____________ Your Code Here _____________ */

interface AlphabetLowercase {
  A: 'a';
  B: 'b';
  C: 'c';
  D: 'd';
  E: 'e';
  F: 'f';
  // ... etc
}

type KebabCase<S extends string, R extends string = ''> =
  S extends `${infer A}${infer T}`
  ? A extends keyof AlphabetLowercase
    ? R extends ''
      ? KebabCase<T, `${AlphabetLowercase[A]}`>
      : KebabCase<T, `${R}-${AlphabetLowercase[A]}`>
    : KebabCase<T, `${R}${A}`>
  : R;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
