import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneEditComponent } from './personne-edit.component';

describe('PersonneEditComponent', () => {
  let component: PersonneEditComponent;
  let fixture: ComponentFixture<PersonneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
