export abstract class HouseholdItem {
    name: string;
    material: string;
    durability: number;
    parameter: number = 0;
    isHighlighted: boolean = false;

    constructor(name: string, material: string, durability: number, parameter: number) {
        if(durability < 0) {
            throw new Error("Durability must be greater than or equal to 0");
        }
        if(parameter < 0) {
            throw new Error("Parameter must be greater than or equal to 0");
        }
        if(name == "" || material == "") {
            throw new Error("Name, material and parameter must not be empty");
        }
        this.name = name;
        this.material = material;
        this.durability = durability;
        this.parameter = parameter;
    }

    getDurability(): number {
        return this.durability;
    }

    abstract displayInfo(): string;

}