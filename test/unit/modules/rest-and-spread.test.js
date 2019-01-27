import test from "tape";

import { aTail, shiftToLast } from "../../../src/modules/rest-and-spread";

test("rest-and-spread", (t) => {
  t.test("aTail", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof aTail;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("aTail", (assert) => {
    const message = "should return array of 2 numbers, second and last from supplied arguments: three numbers";

    const expected = [2, 3];
    const actual = aTail(1, 2, 3);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("shiftToLast", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof shiftToLast;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("shiftToLast", (assert) => {
    const message = "should return array of 3 numbers with first number in last position from supplied arguments: three numbers";

    const expected = [2, 3, 1];
    const actual = shiftToLast(1, 2, 3);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
});
