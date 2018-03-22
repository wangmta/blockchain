const Block = require('./block');
const Blockchain = require('./blockchain');
// const block = new Block('time', 'lasthash', 'hash', 'data');
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
// console.log(fooBlock.toString());

const bc = new Blockchain();
const bc2 = new Blockchain();
bc2.addBlock('foo');
console.log(bc2.chain);
console.log(bc.isValidChain(bc2.chain));