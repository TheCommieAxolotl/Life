function escapeId(id) {
    return id.replace(/[^a-zA-Z0-9_]/g, "_");
}

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
        plugins = {};

        /**
         * @name registerPlugin
         * @description Registers a plugin with lifejs
         * @param {LifePlugin} plugin - lifejs plugin exported Object
         */
        registerPlugin(plugin) {
            const instance = new plugin();

            if (this.plugins?.hasOwnProperty(escapeId(instance.name))) {
                throw new Error(`Plugin "${instance.name}" already registered`);
            }

            this.plugins = { ...this.plugins, [escapeId(instance.name)]: instance };
            instance.initialise();
        }

        Plugin = class {
            name = "LifeJSPlugin";
            initialise() {}
            destroy() {}
        };
    })(),
};
