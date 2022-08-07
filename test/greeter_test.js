const GreeterConstract = artifacts.require("Greeter");

contract("Greeter", () => {
  it("has been deployed successfully", async () => {
    const greeter = await GreeterConstract.deployed();
    assert(greeter, "Contract was not deployed");
  });

  describe("greet()", () => {
    it("returns 'Hello, World!'", async () => {
      const greeter = await GreeterConstract.deployed();
      const expected = "Hello, World!";
      const actual = await greeter.greet();
      assert.equal(actual, expected, "greeted with 'Hello, World!'");
    });
  });
});

contract("Greeter: update greeting", () => {
  describe("setGreeting(string)", () => {
    it("sets greeting to passed in string", async () => {
      const greeter = await GreeterConstract.deployed();
      const expected = "Hi there!";

      await greeter.setGreeting(expected);
      const actual = await greeter.greet();

      assert.equal(actual, expected, "greeted was not updated");
    });
  });
});
