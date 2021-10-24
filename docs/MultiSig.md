# Multi Sig Wallet (MultiSig.sol)

View Source: [contracts/MultiSig.sol](../contracts/MultiSig.sol)

**MultiSig**

Multi-Sig Contract enables multiple people
 to collectively sign a transaction

## Structs
### Transfer

```js
struct Transfer {
 uint256 amount,
 address payable receiver,
 uint256 approvals,
 bool sent,
 uint256 id
}
```

## Contract Members
**Constants & Variables**

```js
//private members
mapping(address => bool) private owners;

//public members
mapping(address => mapping(uint256 => bool)) public approvals;
mapping(address => uint256) public deposits;
uint8 public limit;
struct MultiSig.Transfer[] public transferRequests;

```

**Events**

```js
event TransferRequestCreated(address indexed _initiator, address indexed _receiver, uint256  _id, uint256  _amount);
event ApprovalReceived(address indexed _approver, uint256  _id, uint256  _approvals);
event TransferApproved(uint256  _id);
event Deposited(address indexed _account, uint256  _amount);
```

## Modifiers

- [onlyOwners](#onlyowners)

### onlyOwners

```js
modifier onlyOwners() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Functions

- [constructor(address[] _owners, uint8 _limit)](#)
- [deposit()](#deposit)
- [createTransfer(uint256 _amount, address payable _receiver)](#createtransfer)
- [approve(uint256 _id)](#approve)

### 

Constructs this contract

```js
function (address[] _owners, uint8 _limit) public nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _owners | address[] | Enter the addresses which will  become the owners | 
| _limit | uint8 | Specify the minimum number of approvals  required to confirm a transaction | 

### deposit

```js
function deposit() external payable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### createTransfer

```js
function createTransfer(uint256 _amount, address payable _receiver) external nonpayable onlyOwners 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _amount | uint256 |  | 
| _receiver | address payable |  | 

### approve

```js
function approve(uint256 _id) external nonpayable onlyOwners 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _id | uint256 |  | 

## Contracts

* [MultiSig](MultiSig.md)
