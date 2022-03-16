const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract Max", function () {
  it("Deployment should assign 10 max addresses", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Whitelist");

    const hardhatToken = await Token.deploy(10);

    const maxAddresses = await hardhatToken.maxWhitelistedAddresses();
    expect(maxAddresses).to.equal(10);
  });
});
