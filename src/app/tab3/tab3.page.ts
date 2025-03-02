import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [MyHeaderComponent, IonicModule, CommonModule, FormsModule],
})
export class Tab3Page {
  N: number | null = null;
  matrix: number[][] | null = null;
  highlightedNumbers: Set<string> = new Set();

  constructor() {}

  generateMatrix(){
    let matrix = [];

    if(this.N != null){
      for (let i = 0; i < this.N; i++) {
        const row = [];
        for (let j = 0; j < this.N; j++) {
          row.push(Math.floor(Math.random() * 100)); 
        }
        matrix.push(row);
      }
  
      this.matrix = matrix;
  
      this.highlightMultiplesOfFive();
    }
    else{
      alert("Заповніть розмірність матриці!");
    }
  }

  highlightMultiplesOfFive() {
    let count = 0;
    this.highlightedNumbers.clear();

    if(this.N === null) return;

    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        const num = this.matrix![i][j]; 
        if (num > 0 && num % 5 === 0) {
          count++; 
          this.highlightedNumbers.add(`${i}-${j}`);
        }
      }
    }

    if (count % 2 === 0) {
      alert("Кількість додатніх чисел, що кратні 5, парна!")
      this.highlightedNumbers.clear();
    }
  }

  isHighlighted(i: number, j: number): boolean {
    return this.highlightedNumbers.has(`${i}-${j}`);
  }

}