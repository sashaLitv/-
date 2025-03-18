
export type HouseholdItemName = "Сковорідка" | "Каструля" | "Ніж";
export type HouseholdItemMap = {
    [key: string]: HouseholdItemName;
}

export const HouseholdItemsMap: HouseholdItemMap = {
   Pan: "Сковорідка",
   Pot: "Каструля",
   Knife: "Ніж"
}