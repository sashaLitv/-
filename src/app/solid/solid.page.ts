import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { VehicleReadService } from './services/vehicleRead.service';
import { Vehicle } from './classes/vehicle';
import { Motorbike } from './classes/motorbike';
import { Bicycle } from './classes/bicycle';
import { Truck } from './classes/truck';
import { PassengerCar } from './classes/passengerCar';

@Component({
  selector: 'app-solid',
  templateUrl: './solid.page.html',
  styleUrls: ['./solid.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MyHeaderComponent, IonicModule]
})
export class SolidPage implements OnInit {
  statusMessages: Map<number, any> = new Map();

  constructor(public vehicleReadService: VehicleReadService) {}

  ngOnInit(): void {
    this.vehicleReadService.load();
  }

  bookVehicle(vehicle: Vehicle): void {
    vehicle.setAvailability();
    if (!vehicle.isAvailable()) {
      alert(`Vehicle ID ${vehicle.getID()} has been booked!`);
    }
    else{
      this.clearStatus(vehicle);
      if(vehicle instanceof PassengerCar) vehicle.exit_all();
      if(vehicle instanceof Truck) vehicle.unload_all();
    }
  
  }

  callSpecialFunction(functionName: string, vehicle: Vehicle): void {
    const actions: Record<string, () => any> = {
      move: () => (vehicle instanceof Motorbike || vehicle instanceof PassengerCar || vehicle instanceof Truck)? vehicle.move() : null,
      stop: () => vehicle.stop(),
      drift: () => (vehicle instanceof Motorbike || vehicle instanceof PassengerCar) ? vehicle.drift() : null,
      wheelie: () => (vehicle instanceof Motorbike || vehicle instanceof Bicycle) ? vehicle.doWheelie() : null,
      ride: () => vehicle instanceof Bicycle ? vehicle.ride() : null,
      remove: () => vehicle instanceof Bicycle ? vehicle.removeChain() : null,
      reinstall: () => vehicle instanceof Bicycle ? vehicle.reinstallChain() : null,
      current: () => vehicle instanceof Truck ? vehicle.getCurrentCargoCapacity() : null,
      load: () => vehicle instanceof Truck ? vehicle.loadCargo(100) : null,
      sit: () => vehicle instanceof PassengerCar ? vehicle.sit() : null,
      avaliable: () => vehicle instanceof PassengerCar ? vehicle.getAvailableSeats() : null
    };
  
    if (functionName in actions) {
      const message = actions[functionName]?.();
      if (message !== null && message !== undefined) {
        this.statusMessages.set(vehicle.getID(), message);
      }
    }
  }

  getStatusMessage(vehicle: Vehicle): string {
    return this.statusMessages.get(vehicle.getID()) || 'No actions performed yet';
  }
  clearStatus(vehicle: Vehicle): void {
    this.statusMessages.delete(vehicle.getID());
  }
}