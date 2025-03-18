import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';
import katex from 'katex';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent],
  providers: [TabService, SeriesService]
})
export class ServicepagePage implements OnInit, AfterViewInit {
  function = '\\frac{1}{x^2 + 1}';
  taylor_series = '1 - x^2 + x^4 - x^6 + \\dots';
  range = '(-1, 1)';

  startX: number = 0;
  endX: number = 0;
  h: number = 0;

  xx: string[] = [];
  yyTab: string[] = [];
  yySeries: string[] = [];
  yyRecursion: string[] = [];

  errorMessage: string = '';

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;


  constructor(private tabService: TabService, private seriesService: SeriesService, private recursionService: RecursionService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderMath();
  }

  renderMath() {
    const elements = document.querySelectorAll('.math-content');
    elements.forEach((el) => {
      katex.render(el.textContent || '', el as HTMLElement, {
        throwOnError: false,
        displayMode: false,
      });
    });
  }

  calculate(startX: number, endX: number, h: number) {
    try {
      if(this.isButtonDisabled() || this.errorMessage != '') {
        alert(this.errorMessage);
      }
  
      console.log("Табулювання")
      const tab = this.tabService.getTab(startX, endX, h);
      this.xx = tab.x;
      this.yyTab = tab.y;

      console.log("Обчислення через ряд")
      const series = this.seriesService.getTab(startX, endX, h);
      this.yySeries = series;

      console.log("Обчислення через ряд рекурсивно")
      const recursion = this.recursionService.getTab(startX, endX, h);
      this.yyRecursion = recursion;
      
      this.lineChartMake();
    } catch (e) {
      console.log(e);
    }
  }

  isButtonDisabled(): boolean {
    let isDisabled = true;
    if(this.h <= 0) {
      this.errorMessage = "Введіть правильне значення для кроку!";
    } 
    else if(this.startX > this.endX) {
      let temp = this.startX;
      this.startX = this.endX;
      this.endX = temp;
      this.errorMessage = "Кінцевий діапазон не може бути менший за початковий! Автоматична зміна діапазонів.";
      isDisabled = false;
    } 
    else if(this.startX === null || this.endX === null || this.h === null){
      this.errorMessage = "Одне з полів невизначено!";
    }
    else {
      this.errorMessage = ''; 
      isDisabled = false;
    }

    return isDisabled;
  }

  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
  
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line', 
      data: {
        labels: this.xx, 
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab, 
            borderColor: 'rgb(48, 57, 111)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
          },
          {
            label: 'Ряд Тейлора',
            data: this.yySeries, 
            borderColor: 'rgb(245, 233, 187)',
            borderWidth: 2,
            fill: false,
            pointRadius: 4
          },
          {
            label: 'Рекурсія',
            data: this.yyRecursion, 
            borderColor: 'rgb(111, 48, 62)',
            borderWidth: 2,
            fill: false,
            pointRadius: 6
          }
        ]
      }
    });
  }

}