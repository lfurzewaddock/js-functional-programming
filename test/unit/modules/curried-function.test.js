import test from "tape";

import { gte, add3 } from "../../../src/modules/curried-function";

test.only("curry", t => {
  t.test("gte", assert => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof gte;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("gte", assert => {
    const gte4 = gte(4);

    const message = "should return true for single argument: number 4";
    const expected = true;
    const actual = gte4(4);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("gte", assert => {
    const gte4 = gte(4);

    const message = "should return true for single argument: number 5";
    const expected = true;
    const actual = gte4(5);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("gte", assert => {
    const gte4 = gte(4);

    const message = "should return false for single argument: number 3";
    const expected = false;
    const actual = gte4(3);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("add3", assert => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof add3;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("add3", assert => {
    const message =
      "should return sum total for multiple arguments: numbers 1,2,3";
    const expected = 6;
    const actual = add3(1, 2, 3);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("add3", assert => {
    const message =
      "should return sum total for multiple arguments: numbers 1,2,3";
    const expected = 6;
    const actual = add3(1, 2)(3);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("add3", assert => {
    const message =
      "should return sum total for multiple function invocations with single and/or multiple arguments: number";
    const expected = 6;
    const actual = add3(1)(2, 3);

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("add3", assert => {
    const message =
      "should return sum total for multiple function invocations with single arguments: number";
    const expected = 6;
    const actual = add3(1)(2)(3);

    assert.equal(actual, expected, message);
    assert.end();
  });
});
