import { Knife } from './knife';

describe('Knife Testing', () => {   
    let knife: Knife;
    beforeEach(() => {     
        knife = new Knife("Ніж", "Сталь", 70, 10);   
    });

    fit('should create an instance', () => {
        expect(knife).toBeTruthy();
    });

    fit('should throw an error if durability is negative', () => {
        expect(() => new Knife("Ніж", "Сталь", -70, 10)).toThrowError('Durability must be greater than or equal to 0');
    });

    fit('should throw an error if parameter is negative', () => {
        expect(() => new Knife("Ніж", "Сталь", 70, -10)).toThrowError('Parameter must be greater than or equal to 0');
    });

    fit('should throw an error if name is empty', () =>{
        expect(() => new Knife("", "Сталь", 70, 10)).toThrowError('Name, material and parameter must not be empty');
    })

    fit('should throw an error if material is empty', () =>{
        expect(() => new Knife("Ніж", "", 70, 10)).toThrowError('Name, material and parameter must not be empty');
    })

    fit('display info should return string with data about knife', () => {
        expect(knife.displayInfo()).toEqual("Матеріал: Сталь, <br>Міцність: 70, <br>Гострота: 10");
    });
});