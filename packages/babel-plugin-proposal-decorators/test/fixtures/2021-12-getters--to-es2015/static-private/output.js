var _call_a, _initStatic;

class Foo {
  static getA() {
    return babelHelpers.classStaticPrivateFieldSpecGet(this, Foo, _a);
  }

}

function _get_a() {
  return _call_a(this);
}

var _a = {
  get: _get_a,
  set: void 0
};

(() => {
  [_call_a, _initStatic] = babelHelpers.applyDecs(Foo, [[dec, 8, "a", function () {
    return this.value;
  }]], []);

  _initStatic(Foo);
})();

babelHelpers.defineProperty(Foo, "value", 1);
