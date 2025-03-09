import {HouseholdItem} from "./householdItem";

export class Pot extends HouseholdItem {
    constructor(override name: string, override material: string, override durability: number, parameter: number) {
        super(name, material, durability, parameter);
    }

    override displayInfo(): string {
        return `Матеріал: ${this.material}, <br>Міцність: ${this.durability}, <br>Об'єм: ${this.parameter}`;
    }

}
