/*
  610 - CamelCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  `for-bar-baz` -> `forBarBaz`

  > View on GitHub: https://tsch.js.org/610
*/


/* _____________ Your Code Here _____________ */

interface AlphabetCapitalize {
  a: 'A';
  b: 'B';
  c: 'C';
  d: 'D';
  f: 'F';
  // ... etc
}

type CamelCase<S> =
  S extends `${infer H}-${infer A}${infer T}`
  ? A extends keyof AlphabetCapitalize
    ? `${H}${AlphabetCapitalize[A]}${CamelCase<T>}`
    : `${H}-${CamelCase<`${A}${T}`>}`
  : S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/610/answer
  > View solutions: https://tsch.js.org/610/solutions
  > More Challenges: https://tsch.js.org
*/
