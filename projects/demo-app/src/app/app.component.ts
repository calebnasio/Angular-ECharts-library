import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicChartsComponent } from 'dynamic-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicChartsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Charts Demo';

  // Sample data for charts
  pieChartData = {
    title: 'Sales Distribution',
    data: [30, 20, 25, 15, 10],
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
  };

  barChartData = {
    title: 'Monthly Revenue',
    data: [65, 59, 80, 81, 56, 55, 40],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
}
