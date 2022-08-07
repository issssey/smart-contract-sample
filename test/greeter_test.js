const GreeterConstract = artifacts.require("Greeter");

contract("Greeter", () => {
  it("has been deployed successfully", async () => {
    const greeter = await GreeterConstract.deployed();
    assert(greeter, "Contract was not deployed");
  });
});
