import { Pot } from './pot';

describe("Pot Testing", () => {
    let pot: Pot;

    beforeEach(() => {
        pot = new Pot("Каструля", "Метал", 90, 30);
    });

    fit("should create an instance", () => {    
        expect(pot).toBeTruthy();
    });

    fit('display info should return string with data about pot', () => {
        expect(pot.displayInfo()).toEqual("Матеріал: Метал, <br>Міцність: 90, <br>Об'єм: 30");
    });
});