import attributes from "./enums/attributes.js";
import blocks from "./enums/blocks.js";

class logBuilder{
    static async logRollResult(charact, attribute, diceValue) {
        if (attributes.includes(attribute)) {
            console.log(
                `${charact.name} 🎲 rolou um dado de ${attribute} ${diceValue} + ${charact[attribute]} = ${
                    charact.calculateAttribute
                }`
            );
        } else {
            throw new Error("Invalid attribute. Must be 'velocity', 'maneuverability', or 'power'.");
        }
    }
}

export default logBuilder;