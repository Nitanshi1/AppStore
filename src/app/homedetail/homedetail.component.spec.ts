import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedetailComponent } from './homedetail.component';

describe('HomedetailComponent', () => {
  let component: HomedetailComponent;
  let fixture: ComponentFixture<HomedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomedetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
