import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [MyHeaderComponent, IonicModule, CommonModule, FormsModule],
})
export class Tab2Page {
  num1: number | null = null;
  num2: number | null = null;
  result: { sum: number, numbers: number[] } | null = null;

  constructor() {}

  calculate(a: number, b: number): void {
    this.result = null;
    let sum = 0;
    let numbers: number[] = [];

    for (let i = a; i <= b; i++) {
        if (i % 15 === 0 && i % 7 === 5) {
            sum += i;
            numbers.push(i); 
        }
      }
    this.result = { sum, numbers };
  }
}