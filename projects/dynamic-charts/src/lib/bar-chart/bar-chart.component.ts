import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() title: string = 'Bar Chart';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
}
