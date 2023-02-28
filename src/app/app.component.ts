import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/core/interface/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = '';
  employeeList: Employee[] = [];
  selectedEmployeeList: Employee[] = [];

  constructor() {}

  ngOnInit(): void {
    // mock update
    this.employeeList = [
      { id: 1, name: 'สงวน ลิขสิทธิ์', inputValue: '' },
      { id: 2, name: 'ณรงค์ นัดใช้ปืน', inputValue: '' },
      { id: 3, name: 'ศักดิพันธ์ ชอบนอนหงาย', inputValue: '' },
      { id: 4, name: 'นิธินัย เหินเวหา', inputValue: '' },
      { id: 5, name: 'ไพรัตน์ หม้อน้ำร้อน', inputValue: '' },
      { id: 6, name: 'ลำเทียน จ้องผสมพันธุ์', inputValue: '' },
      { id: 7, name: 'บุญพอ มีเท', inputValue: '' },
      { id: 8, name: 'บุญศรัทธา มหามงคล', inputValue: '' },
    ];

    // initial value
    this.selectedEmployeeList = [
      { id: 1, name: 'สงวน ลิขสิทธิ์', inputValue: '' },
      { id: 2, name: 'ณรงค์ นัดใช้ปืน', inputValue: '' },
    ];
  }

  onSubmit(employee: Employee[]): void {
    console.log(employee);
  }
}
