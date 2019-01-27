import test from "tape";

import { createUser } from "../../../src/modules/named-arguments";

test("named-arguments", (t) => {
  t.test("createUser", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof createUser;

    assert.equal(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object default with no supplied argument";

    const anonymous = createUser();

    const expected = {
      name: "Anonymous",
      avatarThumbnail: "/avatars/anonymous.png",
    };
    const actual = anonymous;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object default with single supplied argument: undefined";

    const anonymous = createUser(undefined);

    const expected = {
      name: "Anonymous",
      avatarThumbnail: "/avatars/anonymous.png",
    };
    const actual = anonymous;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object default with single supplied argument: empty object literal";

    const anonymous = createUser({});

    const expected = {
      name: "Anonymous",
      avatarThumbnail: "/avatars/anonymous.png",
    };
    const actual = anonymous;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object supplied with single supplied argument: object literal with both/all expected parameter values";

    const george = createUser({
      name: "George",
      avatarThumbnail: "avatars/shades-emoji.png",
    });

    const expected = {
      name: "George",
      avatarThumbnail: "avatars/shades-emoji.png",
    };
    const actual = george;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object parameter supplied and default parameter with single supplied argument: object literal with one parameter value";

    const george = createUser({
      name: "George",
    });

    const expected = {
      name: "George",
      avatarThumbnail: "/avatars/anonymous.png",
    };
    const actual = george;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
  t.test("createUser", (assert) => {
    const message = "should return object parameter supplied and default parameter with single supplied argument: object literal with one parameter value";

    const george = createUser({
      avatarThumbnail: "avatars/shades-emoji.png",
    });

    const expected = {
      name: "Anonymous",
      avatarThumbnail: "avatars/shades-emoji.png",
    };
    const actual = george;

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
});
