pragma solidity =0.8.15;

contract Greeter {
  function greet() external pure returns(string memory) {
    return "Hello, World!";
  }
}