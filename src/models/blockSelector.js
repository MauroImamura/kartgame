import blocks from "./enums/blocks.js";

class blockSelector {
    static async getRandomBlock() {    
        const blockValues = Object.values(blocks); // Get an array of block values
        const randomIndex = Math.floor(Math.random() * blockValues.length);
        return blockValues[randomIndex];
    }
}

export default blockSelector;