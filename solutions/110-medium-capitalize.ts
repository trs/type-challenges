/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

  For example

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > View on GitHub: https://tsch.js.org/110
*/


/* _____________ Your Code Here _____________ */

type Capitalize<S extends string> =
  S extends `a${infer R}`
  ? `A${R}`
  : S extends `b${infer R}`
  ? `B${R}`
  : S extends `c${infer R}`
  ? `C${R}`
  : S extends `d${infer R}`
  ? `D${R}`
  : S extends `e${infer R}`
  ? `E${R}`
  : S extends `f${infer R}`
  ? `F${R}`
  : S extends `g${infer R}`
  ? `G${R}`
  : S extends `h${infer R}`
  ? `H${R}`
  : S extends `i${infer R}`
  ? `I${R}`
  : S extends `j${infer R}`
  ? `J${R}`
  : S extends `k${infer R}`
  ? `K${R}`
  : S extends `l${infer R}`
  ? `L${R}`
  : S extends `m${infer R}`
  ? `M${R}`
  : S extends `n${infer R}`
  ? `N${R}`
  : S extends `o${infer R}`
  ? `O${R}`
  : S extends `p${infer R}`
  ? `P${R}`
  : S extends `q${infer R}`
  ? `Q${R}`
  : S extends `r${infer R}`
  ? `R${R}`
  : S extends `s${infer R}`
  ? `S${R}`
  : S extends `t${infer R}`
  ? `T${R}`
  : S extends `u${infer R}`
  ? `U${R}`
  : S extends `v${infer R}`
  ? `V${R}`
  : S extends `w${infer R}`
  ? `W${R}`
  : S extends `x${infer R}`
  ? `X${R}`
  : S extends `y${infer R}`
  ? `Y${R}`
  : S extends `z${infer R}`
  ? `Z${R}`
  : S

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize<''>, ''>>,
  Expect<Equal<Capitalize<'a'>, 'A'>>,
  Expect<Equal<Capitalize<'b'>, 'B'>>,
  Expect<Equal<Capitalize<'c'>, 'C'>>,
  Expect<Equal<Capitalize<'d'>, 'D'>>,
  Expect<Equal<Capitalize<'e'>, 'E'>>,
  Expect<Equal<Capitalize<'f'>, 'F'>>,
  Expect<Equal<Capitalize<'g'>, 'G'>>,
  Expect<Equal<Capitalize<'h'>, 'H'>>,
  Expect<Equal<Capitalize<'i'>, 'I'>>,
  Expect<Equal<Capitalize<'j'>, 'J'>>,
  Expect<Equal<Capitalize<'k'>, 'K'>>,
  Expect<Equal<Capitalize<'l'>, 'L'>>,
  Expect<Equal<Capitalize<'m'>, 'M'>>,
  Expect<Equal<Capitalize<'n'>, 'N'>>,
  Expect<Equal<Capitalize<'o'>, 'O'>>,
  Expect<Equal<Capitalize<'p'>, 'P'>>,
  Expect<Equal<Capitalize<'q'>, 'Q'>>,
  Expect<Equal<Capitalize<'r'>, 'R'>>,
  Expect<Equal<Capitalize<'s'>, 'S'>>,
  Expect<Equal<Capitalize<'t'>, 'T'>>,
  Expect<Equal<Capitalize<'u'>, 'U'>>,
  Expect<Equal<Capitalize<'v'>, 'V'>>,
  Expect<Equal<Capitalize<'w'>, 'W'>>,
  Expect<Equal<Capitalize<'x'>, 'X'>>,
  Expect<Equal<Capitalize<'y'>, 'Y'>>,
  Expect<Equal<Capitalize<'z'>, 'Z'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/110/answer
  > View solutions: https://tsch.js.org/110/solutions
  > More Challenges: https://tsch.js.org
*/
