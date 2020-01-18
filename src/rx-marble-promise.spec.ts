import { TestScheduler } from "rxjs/internal/testing/TestScheduler";
import { multiplyByTwo } from "./rx-marble-promise";

describe("RxMarbles Promise", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
  describe("rxWithPromise", () => {
    it("should multiply numbers by two", () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const values = { a: 2, b: 4, c: 6, d: 8, e: 12 };
        const source$ = cold("a-b-c", values);

        expectObservable(multiplyByTwo(source$)).toBe("b-d-e", values);
      });
    });
  });
});
