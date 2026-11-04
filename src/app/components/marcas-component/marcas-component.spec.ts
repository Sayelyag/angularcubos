import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcasComponent } from './marcas-component';

describe('MarcasComponent', () => {
  let component: MarcasComponent;
  let fixture: ComponentFixture<MarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
