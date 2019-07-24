"use strict"

let Block = require("./Block");

let saneBlock = new Block(Date.now(),'','');

console.log(saneBlock.calculateHash());

