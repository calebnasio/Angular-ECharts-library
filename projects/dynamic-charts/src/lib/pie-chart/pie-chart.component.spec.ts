import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title', () => {
    expect(component.title).toBe('Pie Chart');
  });

  it('should have empty data array by default', () => {
    expect(component.data).toEqual([]);
  });

  it('should have empty labels array by default', () => {
    expect(component.labels).toEqual([]);
  });

  it('should have empty colors array by default', () => {
    expect(component.colors).toEqual([]);
  });
});
