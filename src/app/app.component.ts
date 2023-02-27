import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toppings = new FormControl('');

  toppingList: string[] = [
    'สงวน ลิขสิทธิ์',
    'ณรงค์ นัดใช้ปืน',
    'ศักดิพันธ์ ชอบนอนหงาย',
    'นิธินัย เหินเวหา',
    'ไพรัตน์ หม้อน้ำร้อน',
    'ลำเทียน จ้องผสมพันธุ์',
    'บุญพอ มีเท',
    'บุญศรัทธา มหามงคล',
  ];

  constructor() {}

  ngOnInit(): void {}

  onClickRemove(i: any) {
    if (!this.toppings.value) return;

    let _array: any = this.toppings.value;
    _array.splice(i, 1);
    this.toppings.setValue(_array);
  }
}
