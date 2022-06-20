export default class Bird {
    constructor(health, age) {
        this.name = "Bird";
        this.health = health || 100;
        this.age = age || 0;
    }

    /**
     * @name birth
     * @description Makes a Bird be born
     */
    birth() {
        this.alive = true;
        Life.Animals.push(this);
        console.log(`${this.name} is born!`);
    }

    /**
     * @name die
     * @description Makes a Bird die
     */
    die() {
        if (!this.alive) throw new Error("This Bird is not alive!");
        this.alive = false;
        console.log(`${this.name} died!`);
    }

    /**
     * @name ageUp
     * @description Ages the Bird up by one year
     */
    ageUp() {
        if (!this.alive) throw new Error("This Bird is not alive!");
        this.age++;
    }
}
