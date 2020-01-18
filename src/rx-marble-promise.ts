import { Observable } from "rxjs";
import { mergeMap } from "rxjs/internal/operators";

const multiplyByTwoAsync = (number: number): Promise<number> =>
  Promise.resolve(number * 2);

export const multiplyByTwo = (
  source$: Observable<number>
): Observable<number> => source$.pipe(mergeMap(multiplyByTwoAsync));
