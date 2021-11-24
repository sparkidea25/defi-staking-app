pragma solidity >=0.7.0 <0.9.0;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted {
    if(msg.sender == owner) _; // _; in solidity means "do nothing" continue with the function
    
    }

}