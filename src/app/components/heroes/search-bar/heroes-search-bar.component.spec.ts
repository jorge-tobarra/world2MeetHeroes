import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearchBarComponent } from './heroes-search-bar.component';

describe('HeroesSearchBarComponent', () => {
  let component: HeroesSearchBarComponent;
  let fixture: ComponentFixture<HeroesSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesSearchBarComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
