
const { ethers } = require("hardhat")
const {expect } = require("chai")

describe("Testing the Say hello contarct",()=>{

let myContact;
    beforeEach(async()=>{
        const ContractToken = await ethers.getContractFactory("Token");
       myContact= await ContractToken.deploy();
       await myContact.deployed()
        })

 describe("Get my contrcat  ", async()=>{

  it("Getmy name ",async()=>{
    const name = await myContact.tokenName()
    console.log(name)
  })



  })

})