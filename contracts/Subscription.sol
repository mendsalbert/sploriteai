// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SubscriptionContract {
    address public owner;
    mapping(address => bool) public subscribers;
    uint256 public subscriptionFee;
    AggregatorV3Interface public priceFeed;

    event SubscriptionRenewed(address indexed subscriber, uint256 timestamp);
    event SubscriptionCancelled(address indexed subscriber, uint256 timestamp);

    constructor(address _priceFeed) {
        owner = msg.sender;
        subscriptionFee = 9990000000000000000000; // 9.99 USD (converted to wei)
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    function subscribe() external {
        require(!subscribers[msg.sender], "Already subscribed");

        require(
            getCurrentEthPrice() >= subscriptionFee,
            "Insufficient funds to subscribe"
        );

        subscribers[msg.sender] = true;

        emit SubscriptionRenewed(msg.sender, block.timestamp);
    }

    function unsubscribe() external {
        require(subscribers[msg.sender], "Not subscribed");

        subscribers[msg.sender] = false;

        emit SubscriptionCancelled(msg.sender, block.timestamp);
    }

    function isSubscribed(address subscriber) external view returns (bool) {
        return subscribers[subscriber];
    }

    function setSubscriptionFee(uint256 newFee) external onlyOwner {
        subscriptionFee = newFee;
    }

    function getCurrentEthPrice() internal view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        require(price > 0, "Invalid price feed");
        uint256 ethPrice = uint256(price) * 100; // ETH price with 2 decimal places precision
        return (ethPrice * 10**10) / 10**8; // Convert ETH price to wei
    }
}
