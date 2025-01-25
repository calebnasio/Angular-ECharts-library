import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input() title: string = 'Pie Chart';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = [];
}
