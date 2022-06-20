import { Life } from "../util/life.mjs";
import Names from "../util/names.mjs";

export default class Human {
    /**
     * @name Human
     * @description Creates a new Human
     * @param {string} [name] - The name of the Human
     * @param {number} [health=100] - The health of the Human
     * @param {"male"|"female"} [sex] - The birth sex of the human
     */
    constructor(name, health, sex) {
        this.health = health || 100;
        this.age = 0;
        this.sex = sex || Math.random() * 10 > 5 ? "male" : "female";

        this.name = name || Names.generateName(this.sex);
    }

    /**
     * @name birth
     * @description Makes a Human be born
     */
    birth() {
        this.alive = true;
        Life.Animals.push(this);
        console.log(`${this.name.split(" ")[0]} is born!`);
    }

    /**
     * @name die
     * @description Makes a Human die
     */
    die() {
        if (!this.alive) throw new Error("This Human is not alive!");
        this.alive = false;
        console.log(`${this.name.split(" ")[0]} died!`);
    }

    /**
     * @name ageUp
     * @description Ages the Human up by one year
     */
    ageUp() {
        if (!this.alive) throw new Error("This Human is not alive!");
        this.age++;
    }

    /**
     * @name say
     * @description Makes a Human say something...
     * @param {string} message
     */
    say(message) {
        if (!this.alive) throw new Error("This Human is not alive!");
        console.log(`<${this.name.split(" ")[0]}> ${message}`);
    }

    /**
     * @name reproduce
     * @description Makes a Human reproduce
     * @param {Human} human
     * @param {string} [name]
     * @returns
     */
    reproduce(human, name) {
        if (human === this) throw new Error("You can't reproduce with yourself!");
        if (!this.alive) throw new Error("This Human is not alive!");
        if (!human.alive) throw new Error(`${this.name.split(" ")[0]} cannot reproduce with a Human who is not alive!`);

        if (this.age < 18) {
            throw new Error(`${this.name.split(" ")[0]} is too young to reproduce!`);
        }
        if (human.age < 18) {
            throw new Error(`${human.name.split(" ")[0]} is too young to reproduce!`);
        }

        const child = new Human(null, null, null, `${name || Names.generateName(null, true)} ${this.name.split(" ")[1]}`);

        this.children = this.children?.push(child) || [child];
        human.children = human.children?.push(child) || [child];

        child.parents = [this, human];
        child.birth();

        return child;
    }
}
