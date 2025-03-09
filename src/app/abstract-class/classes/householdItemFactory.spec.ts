import { HouseholdItemFactory } from "./householdItemFactory";

describe('HouseholdItemFactory', () => {

  fit('should create an instance', () => {
    expect(new HouseholdItemFactory()).toBeTruthy();
  });

  fit('should throw an error if name is invalid', () => {
    expect(() => HouseholdItemFactory.create("Ганчірка", "Бавовна", 1, 9)).toThrowError('Invalid household item name');
  });

  fit('should create an instance of Pan', () => {    
    expect(HouseholdItemFactory.create("Сковорідка", "Алюміній", 80, 20)).toBeTruthy();
  });

  fit('should create instance of Pot', () => {
    expect(HouseholdItemFactory.create("Каструля", "Метал", 90, 30)).toBeTruthy();
  });

  fit('should create instance of Knife', () => {
    expect(HouseholdItemFactory.create("Ніж", "Сталь", 70, 10)).toBeTruthy();
  });

});