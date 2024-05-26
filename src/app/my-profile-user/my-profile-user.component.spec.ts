import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileUserComponent } from './my-profile-user.component';

describe('MyProfileUserComponent', () => {
  let component: MyProfileUserComponent;
  let fixture: ComponentFixture<MyProfileUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
