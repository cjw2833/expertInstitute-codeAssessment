import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssetCardComponent } from './user-asset-card.component';

describe('UserAssetCardComponent', () => {
  let component: UserAssetCardComponent;
  let fixture: ComponentFixture<UserAssetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAssetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
