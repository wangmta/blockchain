const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(timeStamp, lastHash, hash, data){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
            Timestamp: ${this.timeStamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash     : ${this.hash.substring(0,10)}
            Data     : ${this.data}`;
    }

    static genesis() {
        //this represents the class itself
        return new this('Genesis time', '-----', 'f1genesis0', []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block) {
        const { timeStamp, lastHash, data } = block;
        // console.log(timeStamp + "    " + lastHash + "    " + data);
        return Block.hash(timeStamp, lastHash, data);
    }
}

module.exports = Block;