import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@Component({
  selector: 'lib-dynamic-charts',
  templateUrl: './dynamic-charts.component.html',
  styleUrls: ['./dynamic-charts.component.scss'],
  standalone: true,
  imports: [CommonModule, PieChartComponent, BarChartComponent]
})
export class DynamicChartsComponent {
  @Input() chartType: 'pie-chart' | 'bar-chart' = 'bar-chart';
  @Input() title: string = 'Chart';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = [];
}
