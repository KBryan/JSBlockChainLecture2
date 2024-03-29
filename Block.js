const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
        constructor (timestamp,transactions,previous_hash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previous_hash = previous_hash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    //npm install crypto-js
    calculateHash(){
        // we will be using SHA256 cyptographic function to generate the hash of this block
        return SHA256(this.timestamp+this.previousHash+JSON.stringify(this.transactions)+this.nonce).toString();
    }

    mineNewBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("A new block was mined with hash "+ this.hash);
    }
}
