import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesForUserComponent } from './articles-for-user.component';

describe('ArticlesForUserComponent', () => {
  let component: ArticlesForUserComponent;
  let fixture: ComponentFixture<ArticlesForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
