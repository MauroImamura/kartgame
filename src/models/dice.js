class dice{
    static async rollDice(){
        return Math.floor(Math.random(6)) + 1;
    }
}

export default dice;