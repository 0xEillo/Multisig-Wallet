/* eslint-disable */

const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Multi Sig Wallet', function () {
  const owners = ['0x4e9bF67F62CE146D4a30FF3B6ae17f15254c19D3', '0x52A5D4a29865093395Cf0238f1E86748c2fB7524']
  let deployedContract

  before(async function () {
    const limit = 10

    const MultiSig = await ethers.getContractFactory('MultiSig')
    deployedContract = await MultiSig.deploy(owners, limit)

    await deployedContract.deployed()
  })

  it('the contract must have been deployed', async function () {
    expect(deployedContract).to.be.an('object')
      .and.have.a.property('address')

    expect(deployedContract.address).to.be.a('string').and.length.is.gt(10)
  })

  it('must have been deployed correctly', async function () {
    expect(await deployedContract.owners(owners[0])).to.be.true
    expect(await deployedContract.owners(owners[1])).to.be.true
    expect(await deployedContract.owners('0x4cac34D5289cD4b37201ffACB2cdab4b0fa53Cf3')).to.be.false
  })
})
