import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledAppsComponent } from './installed-apps.component';

describe('InstalledAppsComponent', () => {
  let component: InstalledAppsComponent;
  let fixture: ComponentFixture<InstalledAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalledAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalledAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
