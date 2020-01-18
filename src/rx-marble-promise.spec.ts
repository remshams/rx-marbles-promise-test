import { TestScheduler } from "rxjs/internal/testing/TestScheduler";
import { rxWithPromise } from "./rx-marble-promise";
import { Observable, of } from "rxjs";

describe("RxMarbles Promise", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
  describe("rxWithPromise", () => {
    it("should multiply numbers by two", () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const values = { a: 2, b: 4, c: 6, d: 8, e: 12 };
        const source$ = cold("a-b-c", values);
        const multiplyByTwoAsync = (value: number): Observable<number> =>
          of(value * 2);

        expectObservable(
          rxWithPromise(source$, { multiplyByTwo: multiplyByTwoAsync })
        ).toBe("b-d-e", values);
        expectObservable(rxWithPromise(source$)).toBe("b-d-e", values);
      });
    });
  });
});
