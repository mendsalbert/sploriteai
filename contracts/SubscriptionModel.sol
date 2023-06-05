// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AlarmClockInterface.sol";

contract SubscriptionContract {
    address public owner;
    mapping(address => bool) public subscribers;
    mapping(address => uint256) public subscriptionExpiry;
    uint256 public subscriptionFee;
    AggregatorV3Interface public priceFeed;
    AlarmClockInterface public alarmClock;

    event SubscriptionRenewed(address indexed subscriber, uint256 timestamp);
    event SubscriptionCancelled(address indexed subscriber, uint256 timestamp);
    event SubscriptionExpired(address indexed subscriber, uint256 timestamp);

    constructor(address _priceFeed, address _alarmClock) {
        owner = msg.sender;
        subscriptionFee = 9990000000000000000000; // 9.99 USD (converted to wei)
        priceFeed = AggregatorV3Interface(_priceFeed);
        alarmClock = AlarmClockInterface(_alarmClock);
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
        subscriptionExpiry[msg.sender] = alarmClock.getCurrentAlarmTime() + 30 days; // Set subscription expiry after 30 days

        emit SubscriptionRenewed(msg.sender, block.timestamp);
    }

    function unsubscribe() external {
        require(subscribers[msg.sender], "Not subscribed");

        subscribers[msg.sender] = false;
        subscriptionExpiry[msg.sender] = 0;

        emit SubscriptionCancelled(msg.sender, block.timestamp);
    }

    function isSubscribed(address subscriber) external view returns (bool) {
        return subscribers[subscriber] && (subscriptionExpiry[subscriber] > block.timestamp);
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

    function alarmTriggered(bytes32 _jobId) external {
        require(msg.sender == address(alarmClock), "Invalid caller");
        require(_jobId == alarmClock.getJobId(), "Invalid job ID");

        // Expire subscriptions that have reached the expiry time
        for (uint256 i = 0; i < subscribers.length; i++) {
            address subscriber = subscribers[i];
            if (subscriptionExpiry[subscriber] <= block.timestamp) {
                subscribers[subscriber] = false;
                subscriptionExpiry[subscriber] = 0;
                emit SubscriptionExpired(subscriber, block.timestamp);
            }
        }
    }
}
