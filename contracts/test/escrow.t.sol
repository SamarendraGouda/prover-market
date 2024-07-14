// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Escrow} from "../src/escrow.sol";

contract CounterTest is Test {
    Escrow public escrow;

    address prover_1 = address(0xdead);
    address user_1 = address(0xbeef);

    function setUp() public {
        escrow = new Escrow();
    }

    function test_prover_register() public {
        escrow.registerNewProver(prover_1);

        require(escrow.proverCnt() == 1, "prover cnt should be 1");
    }

    function test_task_init() public {
        vm.prank(user_1);
        vm.deal(user_1, 1 ether);
        Escrow.Task memory task_ =
            Escrow.Task({deadline: uint32(block.timestamp + 1), cid: 123, amount: 1e18, data: "0x"});

        escrow.initiateTask{value: 1 ether}(task_);
    }
}
