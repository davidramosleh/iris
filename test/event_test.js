/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('Module Event');

  test("Event Test", function () {
      expect(1);

      iris.on("test-event", onEvent);
      iris.notify("test-event");

      iris.off("test-event", onEvent);
      iris.notify("test-event");

  });

  test("Duplicated Event Test", function () {
      expect(1);

      iris.on("duplicated-event", onEvent);
      iris.on("duplicated-event", onEvent);
      iris.on("duplicated-event", onEvent);

      iris.notify("duplicated-event");

  });

  function onEvent () {
    ok(true);
  }

}(jQuery));