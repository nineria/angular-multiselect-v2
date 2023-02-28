import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Employee } from 'src/core/interface/Employee';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input()
  employeeList: Employee[] = [];

  @Input()
  selectedEmployeeList: Employee[] = [];

  @Input()
  hasInput: boolean = false;

  @Input()
  dragAndDrop: boolean = true;

  @Output()
  onSubmit: EventEmitter<Employee[]> = new EventEmitter<Employee[]>();

  filteredEmployeeList: Employee[] = [];

  searchText: string = '';

  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(
      this.selectedEmployeeList,
      event.previousIndex,
      event.currentIndex
    );
  }

  onRemove(i: number): void {
    if (this.selectedEmployeeList.length < 0) return;
    // remove employee from array by index
    let temSelectedEmployeeList: Employee[] = this.selectedEmployeeList;
    temSelectedEmployeeList.splice(i, 1);
    this.selectedEmployeeList = temSelectedEmployeeList;
  }

  onSearch(): void {
    this.toggle = true;
    if (this.searchText == '') {
      this.filteredEmployeeList = [];
      this.toggle = false;
      return;
    }
    // filtered Employee contain only employee that includes searchText
    this.filteredEmployeeList = this.employeeList.filter((employee) =>
      employee.name
        .toLocaleLowerCase()
        .includes(this.searchText.toLocaleLowerCase())
    );
    // update dropdown
    this.selectedEmployeeList.map((employee) => {
      this.filteredEmployeeList = this.filteredEmployeeList.filter(
        (filteredEmployee) => employee.id !== filteredEmployee.id
      );
    });
  }

  onSelectEmployee(selected: Employee): void {
    // update selected employee array
    this.selectedEmployeeList.push(selected);
    //clear default value
    this.filteredEmployeeList = [];
    this.searchText = '';
    this.toggle = false;
  }

  onShowAll() {
    this.toggle = !this.toggle;
    if (!this.toggle) return;

    // Shows all employee who are not selected.
    this.filteredEmployeeList = this.employeeList;
    this.selectedEmployeeList.map((employee) => {
      this.filteredEmployeeList = this.filteredEmployeeList.filter(
        (filteredEmployee) => employee.id !== filteredEmployee.id
      );
    });
  }

  onSubmitClick(): void {
    // emit() selected employee
    this.onSubmit.emit(this.selectedEmployeeList);
  }
}
