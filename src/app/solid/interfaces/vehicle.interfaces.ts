export interface IVehicle {
    getID(): number;
    getRentalPrice(): number;

    getType(): string;
    getDetails(): string[];
}

export interface IAvailability {
    setAvailability(): void; 
    isAvailable(): boolean;  
}

export interface IDriftable {
    drift(): string; 
}

export interface IMovable {
    move(): string;
}

export interface IStopable {
    stop(): string;
}

export interface IRidable {
    ride(): string; 
}

export interface IWheelieable {
    doWheelie(): string;
}