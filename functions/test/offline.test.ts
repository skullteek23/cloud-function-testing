import "jest";
import "ts-jest";

import { incrementFunc } from "../src";

/// HTTP

describe("incrementFunc", () => {
  test("it returns a successful response with a valid card", () => {
    const req = { body: { value: 1 } };
    const res = {
      send: (payload: any) => {
        expect(payload).toBe("increment");
      },
    };

    incrementFunc(req as any, res as any);
  });
});
