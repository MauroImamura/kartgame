import blocks from "./enums/blocks";

class blockSelector{
    static async getRandomBlock() {    
        return blocks[Math.floor(Math.random()*Object.keys(blocks).length)];
    }
}

export default blockSelector;