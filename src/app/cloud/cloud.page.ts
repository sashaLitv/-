import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Reader } from './reader.module';
import { ReaderList } from './readerList.module';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    CommonModule,  IonicModule, RouterModule,  
    MyHeaderComponent
  ]
})

export class CloudPage implements OnInit {
  readers = new ReaderList();
  dataUrl = "https://api.jsonbin.io/v3/b/67c385e7e41b4d34e49f177f";
  loading: any;
  lineChart: any;
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  constructor() {}
  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    let data: any = [];
    fetch(this.dataUrl)
      .then(response => response.json())
      .then(json =>{
        data = json;
        data = data.record;

        try{
          let i = 0;
          while(data[i] != undefined){
            if(data[i].hasOwnProperty('address')){
              this.readers.addReader(data[i] as Reader)
            }
            else throw new Error("Error load file");
            i++;
          }
        }
        catch(error){
          alert(`Error: ${error}`);
        }
        this.readers.sortReaderByAddress();
        this.lineChartMethod();
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  lineChartMethod() {
    if (this.lineChart) {
      this.lineChart.destroy();
    }
  
    const sortedReaders = this.readers.readers; 
    const aggregatedData: Record<string, number> = {}; 
  
    sortedReaders.forEach(reader => {
      const streetWithCity = reader.address.replace(/,\s*\d+\s*,/, ','); 
      console.log(streetWithCity);
      if (!aggregatedData[streetWithCity]) {
        aggregatedData[streetWithCity] = 0;
      }
      aggregatedData[streetWithCity] += 1;
    });
  
    const addresses = Object.keys(aggregatedData);
    const readerCounts = Object.values(aggregatedData);
  
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: addresses,
        datasets: [{
          label: 'Кількість читачів',
          data: readerCounts,
          backgroundColor: 'rgb(48, 57, 111)',
        }]
      }
    });
  }
}

