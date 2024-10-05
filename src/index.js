import character from "./models/character.js";
import blockSelector from "./models/blockSelector.js";
import dice from "./models/dice.js";
import logBuilder from "./models/logBuilder.js";
import blocks from "./models/enums/blocks.js";
import attributes from "./models/enums/attributes.js";

async function raceEngine(){
    let round = 0;
    let player1 = new character("Mario", 4, 4, 4);
    let player2 = new character("Donkey Kong", 4, 2, 6);
    await logBuilder.logContestStart(player1, player2);
    while(round < 5){
        await logBuilder.logRoundStart(round);
        let block = await blockSelector.getRandomBlock();
        await logBuilder.logBlock(block);
        let [dice1, dice2] = [await dice.rollDice(), await dice.rollDice()];
        if(block === blocks.STRAIGHT){
            await logBuilder.logRollResult(player1, attributes.VELOCITY, dice1);
            await logBuilder.logRollResult(player2, attributes.VELOCITY, dice2);
            let attribute1 = await player1.calculateAttribute(attributes.VELOCITY, dice1);
            let attribute2 = await player2.calculateAttribute(attributes.VELOCITY, dice2);
            if(attribute1 === attribute2){
                await logBuilder.logBlockResult();
            }
            else{
                if(attribute1 > attribute2){
                    await player1.updatePoints(1);
                    await logBuilder.logBlockResult(player1);
                }
                else{
                    await player2.updatePoints(1);
                    await logBuilder.logBlockResult(player2);
                }
            }
        }
        else if(block === blocks.CURVE){
            await logBuilder.logRollResult(player1, attributes.MANEUVERABILITY, dice1);
            await logBuilder.logRollResult(player2, attributes.MANEUVERABILITY, dice2);
            let attribute1 = await player1.calculateAttribute(attributes.MANEUVERABILITY, dice1);
            let attribute2 = await player2.calculateAttribute(attributes.MANEUVERABILITY, dice2);
            if(attribute1 === attribute2){
                await logBuilder.logBlockResult();
            }
            else{
                if(attribute1 > attribute2){
                    await player1.updatePoints(1);
                    await logBuilder.logBlockResult(player1);
                }
                else{
                    await player2.updatePoints(1);
                    await logBuilder.logBlockResult(player2);
                }
            }
        }
        else if(block === blocks.COMBAT){
            await logBuilder.logCombatStart(player1, player2);
            await logBuilder.logRollResult(player1, attributes.POWER, dice1);
            await logBuilder.logRollResult(player2, attributes.POWER, dice2);
            let attribute1 = await player1.calculateAttribute(attributes.POWER, dice1);
            let attribute2 = await player2.calculateAttribute(attributes.POWER, dice2);
            if(attribute1 === attribute2){
                await logBuilder.logCombatResult();
            }
            else{
                if(attribute1 > attribute2){
                    await player2.updatePoints(-1);
                    await logBuilder.logCombatResult(player1, player2);
                }
                else{
                    await player1.updatePoints(-1);
                    await logBuilder.logCombatResult(player2, player1);
                }
            }
        }
        else{
            await logBuilder.blockError();
        }
        round ++;
    }
    if(player1.points > player2.points){
        await logBuilder.declareWinner(player1, player2);
    }
    else{
        await logBuilder.declareWinner(player2, player1);
    }
}

(async function main() {
    await raceEngine();
})();