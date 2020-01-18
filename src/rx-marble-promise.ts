import { Observable } from "rxjs";
import { mergeMap } from "rxjs/internal/operators";

const multiplyByTwoAsync = (number: number): Promise<number> =>
  Promise.resolve(number * 2);

export const rxWithPromise = (driver: Observable<number>): Observable<number> =>
  driver.pipe(mergeMap(multiplyByTwoAsync));
