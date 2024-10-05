import attributes from "./enums/attributes.js";
import blocks from "./enums/blocks.js";

class logBuilder{
    static async logContestStart(charact1, charact2){
        console.log(
            `\n🏁🚨 Corrida entre ${charact1.name} e ${charact2.name} começando...\n`
          );
    }

    static async logRoundStart(round) {
        console.log(`🏁 Rodada ${round}`);
    }

    static async logBlock(selectedBlock){
        console.log(`Bloco: ${selectedBlock}`);
    }

    static async blockError() {
        console.log("Erro ao selecionar o bloco da pista!!!");
    }

    static async logRollResult(charact, attribute, diceValue) {
        if (Object.values(attributes).includes(attribute)) {
            console.log(
                `${charact.name} 🎲 rolou um dado de ${attribute} ${diceValue} + ${charact[attribute]} = ${
                    await charact.calculateAttribute(attribute, diceValue)
                }`
            );
        } else {
            throw new Error("Invalid attribute. Must be 'velocity', 'maneuverability', or 'power'.");
        }
    }

    static async logBlockResult(winCharact) {
        if (winCharact) {
            console.log(`${winCharact.name} marcou um ponto!`);
        } else {
            console.log("Rodada empatada!");
        }
        console.log("-----------------------------");
    }
    

    static async logCombatStart(charact1, charact2){
        console.log(`${charact1.name} confrontou com ${charact2.name}! 🥊`);
    }

    static async logCombatResult(winCharact, losCharact) {
        if (winCharact && losCharact) {
            console.log(`${winCharact.name} venceu o confronto! ${losCharact.name} perdeu 1 ponto 🐢`);
        } else {
            console.log("Confronto empatado! Nenhum ponto foi perdido");
        }
        console.log("-----------------------------");
    }    

    static async declareWinner(winCharact, losCharact) {
        console.log("Resultado final:");
        console.log(`${winCharact.name}: ${winCharact.points} ponto(s)`);
        console.log(`${losCharact.name}: ${losCharact.points} ponto(s)`);
      
        if (winCharact.points != losCharact.points)
          console.log(`\n${winCharact.name} venceu a corrida! Parabéns! 🏆`);
        else console.log("A corrida terminou em empate");
      }
}

export default logBuilder;