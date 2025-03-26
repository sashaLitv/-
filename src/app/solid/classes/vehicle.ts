import { IVehicle, IStopable, IAvailability} from "../interfaces/vehicle.interfaces";

export abstract class Vehicle implements IVehicle, IStopable, IAvailability{
    private id: number;
    private rentalPrice: number;
    private available: boolean;

    constructor(id: number, rentalPrice: number, avaliable: boolean){
        this.id = id;
        this.rentalPrice = rentalPrice;
        this.available = avaliable;
    }

    getID(): number {
        return this.id;
    }
    getRentalPrice(): number {
        return this.rentalPrice;
    }

    getType(): string {
        return 'Vehicle';
    }
    getDetails(): string[] {
        let details: string[] = [];
        details.push(`ID: ${this.getID()}`);
        details.push(`Type: ${this.getType()}`);
        details.push(`Rental Price: $${this.getRentalPrice()}`);
        details.push(`Available: ${this.isAvailable() ? 'Yes' : 'No'}`);

        return details;
    }


    isAvailable(): boolean {
        return this.available;
    }
    setAvailability(): void {
        this.available = !this.available;
    }


    stop(): string {
        return `The vehicle (${this.getID()}) has stopped.`;
    }
}