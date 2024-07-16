function receivesAFunction (cb){
    cb("some data");
}

function returnsANamedFunction() {
  return function sayHello() {
    console.log("Hello!");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    // Function body
    // Code to be executed
  };
}

describe("returnsAnAnonymousFunction()", () => {
  var fn;

  before(() => {
    fn = returnsAnAnonymousFunction();
  });

  it("returns a function", () => {
    expect(fn).to.be.a("function");
  });

  it("returns an anonymous function", () => {
    expect(fn.name).to.eql("");
  });
});