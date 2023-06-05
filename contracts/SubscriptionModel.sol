// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubscriptionModel {
    address payable public contractOwner;
    uint256 public subscriptionFee = 0.0053 ether;
    mapping(address => bool) public subscriptions;

    event SubscriptionStatus(address user, bool isSubscribed);
    event PaymentReceived(address user, uint256 amount);

    constructor() {
        contractOwner = payable(msg.sender);
    }
    
    function subscribe() public payable {
        require(!subscriptions[msg.sender], "Already subscribed");
        require(msg.value == subscriptionFee, "Invalid payment amount");

        subscriptions[msg.sender] = true;
        emit SubscriptionStatus(msg.sender, true);
        emit PaymentReceived(msg.sender, msg.value);
    }

    function unsubscribe() public {
        require(subscriptions[msg.sender], "Not subscribed");

        subscriptions[msg.sender] = false;
        emit SubscriptionStatus(msg.sender, false);
    }

    function isSubscribed() public view returns (bool) {
        return subscriptions[msg.sender];
    }

    function withdrawFunds() public {
        require(msg.sender == contractOwner, "Only contract owner can withdraw funds");

        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No funds available");

        contractOwner.transfer(contractBalance);
    }
}
