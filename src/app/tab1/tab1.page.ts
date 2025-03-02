import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [MyHeaderComponent, IonicModule, CommonModule, FormsModule],
})

export class Tab1Page {
  num1: number | null = null;
  num2: number | null = null;
  num3: number | null = null;
  result: number | null = null;

  constructor() {}

  getProductOfDigits(sum: number): number {
    this.result = null;
    let numStr = Math.abs(sum).toString();
    let product = 1;

    for(let digit of numStr){
      product *= parseInt(digit, 10);
    }

    return product;

  }

  calculate() {
    if (this.num1 !== null && this.num2 !== null && this.num3 !== null) {
      if(this.num1 % 2 === 0 && this.num2 % 2 === 0 && this.num3 % 2 === 0){
        this.result = this.num1 * this.num2 * this.num3;
        alert("Добуток чисел!") 
      }
      else{
        let sum = this.num1 + this.num2 + this.num3;
        let productOfDigits = this.getProductOfDigits(sum);
        
        if(productOfDigits % 2 === 0){
          this.result = sum * sum;
          alert("Квадрат суми!") 
        }
        else{
          alert("Добуток цифр суми не парний!")
        }
      }
    } else {
      this.result = null;
      alert("Заповніть всі поля!") 
    }
  }
}