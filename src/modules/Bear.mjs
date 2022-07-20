import { Life } from "../util/life.mjs";

export default class Bear {
    constructor(name, health, age) {
        this.name = name || "Bear";
        this.health = health || 100;
        this.age = age || 0;
    }

    /**
     * @name birth
     * @description Makes a Bear be born
     */
    birth() {
        this.alive = true;
        Life.Animals.push(this);
        console.log(`${this.name} is born!`);
    }

    /**
     * @name die
     * @description Makes a Bear die
     */
    die() {
        if (!this.alive) throw new Error("This Bear is not alive!");
        this.alive = false;
        console.log(`${this.name} died!`);
    }

    /**
     * @name ageUp
     * @description Ages the Bear up by one year
     */
    ageUp() {
        if (!this.alive) throw new Error("This Bear is not alive!");
        this.age++;
    }
}
