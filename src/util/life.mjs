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
    /**
     * @name Meta
     * @description Object containing metadata about lifejs
     */
    Meta: new (class {
        get version() {
            return "1.0.1";
        }
        plugins = [];

        /**
         * @name registerPlugin
         * @description Registers a plugin with lifejs
         * @param {LifePlugin} plugin - lifejs plugin exported Object
         */
        registerPlugin(plugin) {
            this.plugins.push(plugin);
            plugin.initilise();
        }
    })(),
};
