const oldConsole = console;

function getHandler(values) {
  function get(_, prop) {
    if (typeof prop === 'string') {
      values.push(prop);
    }
    return new Proxy(() => {}, {
      get: getHandler(values),
      apply(_, __, receiver) {
        if (receiver[0] in oldConsole) {
          oldConsole[receiver[0]](...values);
        } else {
          oldConsole.log(...values);
        }
        return 'what';
      },
    });
  }
  return get;
}

const _console = new Proxy(oldConsole, {
  get(_, prop) {
    const values = [];
    if (typeof prop === 'string') {
      values.push(prop);
    }
    return new Proxy(() => {}, {
      get: getHandler(values),
      apply(_, __, receiver) {
        if (receiver[0] in oldConsole) {
          oldConsole[receiver[0]](...values);
        } else {
          oldConsole.log(...values);
        }
        return 'what';
      },
    });
  },
});

export default new Proxy(
  function what() {
    console = _console;
  },
  {
    getPrototypeOf() {
      console = _console;
      return 'what';
    },
    setPrototypeOf() {
      console = _console;
      return 'what';
    },
    isExtensible() {
      console = _console;
      return 'what';
    },
    preventExtensions() {
      console = _console;
      return 'what';
    },
    getOwnPropertyDescriptor() {
      console = _console;
      return 'what';
    },
    defineProperty() {
      console = _console;
      return 'what';
    },
    has() {
      console = _console;
      return 'what';
    },
    get() {
      console = _console;
      return 'what';
    },
    set() {
      console = _console;
      return 'what';
    },
    deleteProperty() {
      console = _console;
      return 'what';
    },
    ownKeys() {
      console = _console;
      return 'what';
    },
    apply() {
      console = _console;
      return 'what';
    },
    construct() {
      console = _console;
      return 'what';
    },
  }
);
