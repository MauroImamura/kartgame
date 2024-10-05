import attributes from "./enums/attributes.js";

class character{
    constructor(name, velocity, maneuverability, power) {
        this.#paramValidation(velocity, maneuverability, power);
        this.name = name;
        this.velocity = velocity;
        this.maneuverability = maneuverability;
        this.power = power;
        this.points = 0;
    }

    #paramValidation(velocity, maneuverability, power){
        if (!Number.isInteger(velocity) || !Number.isInteger(maneuverability) || !Number.isInteger(power)) {
            throw new Error("Velocity, maneuverability, and power must be integers.");
        }
    }

    async calculateAttribute(attribute, diceValue) {
        if (Object.values(attributes).includes(attribute)) {
            return this[attribute] + diceValue;
        } else {
            throw new Error("Invalid attribute. Must be 'velocity', 'maneuverability', or 'power'.");
        }
    }

    async updatePoints(value){
        this.points + value <= 0 ? this.points : this.points += value;
    }
}

export default character;