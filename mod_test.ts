import { test, assert, assertEquals } from "./test_deps.ts";
import * as mod from "./mod.ts";

test({
  name: "public API assertions",
  fn() {
    assert(mod != null);
    assertEquals(typeof mod.testEach, "function");
    // assertEquals(typeof mod.TestCase, "symbol");
    /* assertEquals(typeof mod.httpErrors, "object");
      assertEquals(typeof mod.REDIRECT_BACK, "symbol"); */
    assertEquals(Object.keys(mod).length, 1);
  },
});
