import { Vehicle } from "./vehicle";
import { IRidable, IStopable, IWheelieable } from "../interfaces/vehicle.interfaces";  

export class Bicycle extends Vehicle implements IRidable, IStopable, IWheelieable{
    private brakeType: string; // Тип гальм (наприклад, "disc", "rim", "hydraulic")
    private countRides: number;
    private isChainOff: boolean; 

    constructor(id: number, rentalPrice: number, available: boolean, brakeType: string) {
        super(id, rentalPrice, available);
        this.brakeType = brakeType;
        this.countRides = 0;
        this.isChainOff = false;
    }

    getBrakeType(): string {
        return this.brakeType;
    }
    removeChain(): string {
        if (this.isChainOff) {
            return "The chain is already off.";
        }
        
        this.isChainOff = true;
        this.countRides = 5;
        return "The chain has been removed from the bicycle.";
    }
    reinstallChain(): string {
        if (!this.isChainOff) {
            return "The chain is already on the bicycle!";
        }
        
        this.isChainOff = false;
        this.countRides = 0;
        return "The chain has been reinstalled on the bicycle.";
    }

    override getType(): string {
        return 'Bicycle';
    }

    override getDetails(): string[] {
        let details: string[] = super.getDetails(); 
        details.push(`Brake Type: ${this.getBrakeType()}`);
        return details;
    }

    doWheelie(): string {
        return "The bicycle is doing a wheelie!";
    }
    ride(): string {
        if (this.isChainOff) {
            return `The bicycle (${this.getID()}) can't ride because the chain is off!`;
        }
        
        if(this.countRides === 5) {
            alert("The chain came off the bike. So reinstall it");
            this.isChainOff = true; 
        }
        this.countRides++;
        return `The bicycle (${this.getID()}) is now riding on the road!`;
    }
}