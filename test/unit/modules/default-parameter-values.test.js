import test from "tape";

import { orZero } from "../../../src/modules/default-parameter-values";

test("default-parameter-values", (t) => {
  // Note: Parameters with defaults don’t count toward the function’s .length property,
  // which will throw off utilities such as autocurry which depend on the .length value.
  // Some curry utilities (such as lodash/curry) allow you to pass a custom arity to work
  // around this limitation if you bump into it.
  t.test("orZero", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof orZero;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return 0 when argument not supplied";
    const actual = orZero();
    const expected = 0;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return single supplied argument: 1";
    const actual = orZero(1);
    const expected = 1;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return single supplied argument: false";
    const actual = orZero(false);
    const expected = false;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return single supplied argument: null";
    const actual = orZero(null);
    const expected = null;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return 0 when single supplied argument: undefined";
    const actual = orZero(undefined);
    const expected = 0;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("orZero", (assert) => {
    const message = "should return an empty string when single supplied argument: empty string";
    const actual = orZero("");
    const expected = "";

    assert.equal(actual, expected, message);
    assert.end();
  });
});
