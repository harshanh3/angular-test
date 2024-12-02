import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
 
  employees: any[] = [];
  newEmployee: any = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', contact: '', email: '', address: '' };
  }


}
