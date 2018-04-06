const SHA256 = require('crypto-js/sha256');
const DIFFICULTY = require('../config').DIFFICULTY;

class Block {
    constructor(timeStamp, lastHash, hash, data, nonce){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
    }

    toString() {
        return `Block -
            Timestamp: ${this.timeStamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash     : ${this.hash.substring(0,10)}
            Data     : ${this.data}
            Nonce    : ${this.nonce}`;
    }

    static genesis() {
        //'this' represents the class itself
        return new this('Genesis time', '-----', 'f1genesis0', [], 0);
    }

    static mineBlock(lastBlock, data) {
        let timeStamp, hash, nonce=0;
        const lastHash = lastBlock.hash;

        do {
            nonce++;
            timeStamp = Date.now();
            hash = Block.hash(timeStamp, lastHash, data, nonce);
        } while(hash.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY));

        return new this(timeStamp, lastHash, hash, data, nonce);
    }

    static hash(timeStamp, lastHash, data, nonce) {
        return SHA256(`${timeStamp}${lastHash}${data}${nonce}`).toString();
    }

    static blockHash(block) {
        const { timeStamp, lastHash, data, nonce } = block;
        // console.log(timeStamp + "    " + lastHash + "    " + data);
        return Block.hash(timeStamp, lastHash, data, nonce);
    }
}

module.exports = Block;