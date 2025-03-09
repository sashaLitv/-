import { Pan } from "./pan";

export type HouseholdItemName = "Сковорідка" | "Каструля";
export type HouseholdItemMap = {
    [key: string]: HouseholdItemName;
}

export const HouseholdItemsMap: HouseholdItemMap = {
   Pan: "Сковорідка",
   Pot: "Каструля"
}