import { Observable } from "rxjs";
import { mergeMap } from "rxjs/internal/operators";

export type MultiplyByTwoAsync = (
  value: number
) => Promise<number> | Observable<number>;

const multiplyByTwoAsync = (number: number): Promise<number> =>
  Promise.resolve(number * 2);

type Options = { multiplyByTwo: MultiplyByTwoAsync };
export const rxWithPromise = (
  source$: Observable<number>,
  { multiplyByTwo = multiplyByTwoAsync }: Options = {
    multiplyByTwo: multiplyByTwoAsync
  }
): Observable<number> => source$.pipe(mergeMap(multiplyByTwo));
