export const Life = {
    /**
     * @name Animals
     * @description Array of all the animals that have been born
     */
    Animals: [],

    /**
     * @name passTime
     * @description Ages all Animals by one year
     */
    passTime: () => {
        Life.Animals.forEach((animal) => animal.ageUp());
    },
};
