import { HouseholdItem } from "./householdItem";
import { HouseholdItemsMap } from "./householdItemName";
import { Pan } from "./pan";
import { Pot } from "./pot";    

export class HouseholdItemFactory {   
    public static create(name: string, material: string, durability: number, parameter: number): HouseholdItem {
        switch (name) {
            case "Сковорідка":
                return new Pan(name, material, durability, parameter);
            case "Каструля":
                return new Pot(name, material, durability, parameter);
            default:
                throw new Error("Invalid name");
        }
    }
}