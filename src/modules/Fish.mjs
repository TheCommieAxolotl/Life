import { Life } from "../util/life.mjs";

export default class Fish {
    constructor(name, health, age) {
        this.name = name || "Fish";
        this.health = health || 100;
        this.age = age || 0;
    }

    /**
     * @name birth
     * @description Makes a Fish be born
     */
    birth() {
        this.alive = true;
        Life.Animals.push(this);
        console.log(`${this.name} is born!`);
    }

    /**
     * @name die
     * @description Makes a Fish die
     */
    die() {
        if (!this.alive) throw new Error("This Fish is not alive!");
        this.alive = false;
        console.log(`${this.name} died!`);
    }

    /**
     * @name ageUp
     * @description Ages the Fish up by one year
     */
    ageUp() {
        if (!this.alive) throw new Error("This Fish is not alive!");
        this.age++;
    }
}
