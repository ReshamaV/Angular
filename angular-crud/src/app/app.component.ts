import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,CommonModule,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud';

  
}
