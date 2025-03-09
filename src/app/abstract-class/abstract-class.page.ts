import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HouseholdItem } from './classes/householdItem';
import { HouseholdItemFactory } from './classes/householdItemFactory';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
})
export class AbstractClassPage implements OnInit {
  constructor() {}

  data: any = [];
  householdItems: HouseholdItem[] = [];
  dataUrl = "https://api.jsonbin.io/v3/b/67cdb2bae41b4d34e4a3705e";

  ngOnInit() {
    this.load();
  }

  async load() {  
    this.data = [];
    this.householdItems = [];

    fetch(this.dataUrl)
      .then(res => res.json()) 
      .then(json => {
        this.data = json;
        this.data = this.data.record;

        let index = 0;
        while(this.data[index] != undefined){ 
          let h = HouseholdItemFactory.create(
            this.data[index].name, 
            this.data[index].material, 
            this.data[index].durability, 
            this.data[index]['diameter'] | this.data[index]['volume']);
      
          this.householdItems.push(h);
          index++;
        }
      })
      .catch(error => console.error('Error fetching data:', error)); 
  }

  top5Durability(items: HouseholdItem[]): void {
    let itemsWithIndex = items.map((item, index) => ({
      item,
      index
    }));
  
    let top5 = itemsWithIndex
      .sort((a, b) => b.item.durability - a.item.durability)
      .slice(0, 5);
  
    this.highlightTopItems(top5);
  }

  highlightTopItems(top5: { item: HouseholdItem, index: number }[]): void {
    top5.forEach(({ index }) => {
      let headerElement = document.getElementById('header-' + index);
  
      if (headerElement) {
        let lightness = 100 - (index * 10); 
        headerElement.style.backgroundColor = `hsl(200, 100%, ${lightness}%)`; 
      }
    });
  }
}
