import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title', () => {
    expect(component.title).toBe('Bar Chart');
  });

  it('should have empty data array by default', () => {
    expect(component.data).toEqual([]);
  });

  it('should have empty labels array by default', () => {
    expect(component.labels).toEqual([]);
  });
});
