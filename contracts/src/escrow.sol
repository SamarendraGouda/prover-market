// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Escrow {
    uint256 public ctr;
    uint256 public proverCnt;

    mapping(uint256 => Task) taskRegistry;
    mapping(uint256 => bytes) proofRegistry;

    mapping(uint256 => address) proverRegistry;
    mapping(uint256 => uint256) proverSolves;

    struct Task {
        uint32 deadline;
        uint256 cid; // circuit id
        uint256 amount;
        bytes data;
    }

    event TaskInit(Task task);

    function registerNewProver(address prover) external {
        proverRegistry[proverCnt++] = prover;
    }

    function initiateTask(Task memory task_) external payable {
        require(task_.deadline > block.timestamp, "deadline must be of a future date");

        require(task_.amount == msg.value, "amount sent different");
        require(task_.amount > 0, "amount sent zero");

        require(task_.data.length > 0, "invalid task");

        taskRegistry[ctr++] = task_;

        emit TaskInit(task_);
    }

    function completeTask(uint256 proverId, uint256 proveId, bytes memory proof) external {
        proofRegistry[proveId] = proof;
        proverSolves[proverId]++;

        uint256 amount_ = taskRegistry[proveId].amount;

        (bool bool_,) = proverRegistry[proverId].call{value: amount_}("");

        require(bool_, "payment failed");
    }
}
