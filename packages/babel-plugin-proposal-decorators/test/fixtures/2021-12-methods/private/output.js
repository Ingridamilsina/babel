var _call_a, _initProto;

class Foo {
  static {
    [_call_a, _initProto] = babelHelpers.applyDecs(this, [[dec, 2, "a", function () {
      return this.value;
    }]], []);
  }

  constructor(...args) {
    _initProto(this);
  }

  #a = _call_a;
  value = 1;

  callA() {
    return this.#a();
  }

}
