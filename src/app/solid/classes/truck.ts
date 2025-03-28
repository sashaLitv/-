import { Vehicle } from "./vehicle";
import { IMovable}  from "../interfaces/vehicle.interfaces";

export class Truck extends Vehicle implements IMovable{
    private cargoCapacity: number; 
    private currentCargoCapacity: number; 

    constructor(id: number, rentalPrice: number, avaliable: boolean, cargoCapacity: number) {
        super(id, rentalPrice,  avaliable);
        this.cargoCapacity = cargoCapacity;
        this.currentCargoCapacity = 0;
    }

    getMaxCargoCapacity(): number {
        return this.cargoCapacity;
    }
    getCurrentCargoCapacity(): number {
        return this.currentCargoCapacity;  
    }
    loadCargo(weight: number): string {
        let message: string;
        if (this.currentCargoCapacity + weight > this.cargoCapacity) {
            message = `Sorry, cabin is full! Current cargo weight: ${this.currentCargoCapacity} kg.`;
        } else {
            this.currentCargoCapacity += weight;
            message = `Cargo loaded! Current cargo weight: ${this.currentCargoCapacity} kg.`;
        }
        return message; 
    }
    unload_all(){
        this.currentCargoCapacity = 0;
    }


    override getType(): string {
        return 'Truck';
    }
    override getDetails(): string[] {
        let details: string[] = super.getDetails(); 
        details.push(`Cargo capacity: ${this.getMaxCargoCapacity()}`);
        return details;
    }
    override stop(): string {
        return `The truck (${this.getID()}) has stopped.`;
    }
    
    move(): string {
        return `The truck (${this.getID()}) is moving.`;
    }
}