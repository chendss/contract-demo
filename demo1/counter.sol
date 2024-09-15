pragma solidity ^0.8.13;

contract Counter {
    uint8 public count;

    constructor() {
        count = 0;
    }

    function add() public {
        count += 1;
    }

    function getCount() public view returns (uint8) {
        return count;
    }
}
