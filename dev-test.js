const Block = require('./blockchain/block');
const Blockchain = require('./blockchain/index');
const Wallet = require('./wallet');

const wallet = new Wallet();
// const block = new Block('time', 'lasthash', 'hash', 'data');
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
// console.log(fooBlock.toString());

// const bc = new Blockchain();
// const bc2 = new Blockchain();
// bc2.addBlock('foo');
// console.log(bc2.chain);
// console.log(bc.isValidChain(bc2.chain));

// const bc = new Blockchain();

// for(let i=0; i<10; i++) {
//     console.log(bc.addBlock(`foo-${i}`).toString());
// }

console.log(wallet.toString());