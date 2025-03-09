import { Pan } from './pan';

describe('Pan Testing', () => {
    let pan: Pan;
    beforeEach(() => {
        pan = new Pan("Сковорідка", "Алюміній", 80, 20);
    });

    fit('should create an instance', () => {
        expect(new Pan("Сковорідка", "Алюміній", 80, 20)).toBeTruthy();
    });

    fit('display info should return string with data about pan', () => {
        expect(pan.displayInfo()).toEqual("Матеріал: Алюміній, <br>Міцність: 80, <br>Діаметр: 20");
    });
});