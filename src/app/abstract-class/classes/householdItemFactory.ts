import { HouseholdItem } from "./householdItem";
import { Pan } from "./pan";
import { Pot } from "./pot";    
import { Knife } from "./knife";

export class HouseholdItemFactory {   
    public static create(name: string, material: string, durability: number, parameter: number): HouseholdItem {
        switch (name) {
            case "Сковорідка":
                return new Pan(name, material, durability, parameter);
            case "Каструля":
                return new Pot(name, material, durability, parameter);
            case "Ніж": 
                return new Knife(name, material, durability, parameter);
            default:
                throw new Error("Invalid household item name");
        }
    }
}