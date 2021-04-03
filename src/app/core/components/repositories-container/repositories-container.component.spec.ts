import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesContainerComponent } from './repositories-container.component';

describe('RepositoriesContainerComponent', () => {
  let component: RepositoriesContainerComponent;
  let fixture: ComponentFixture<RepositoriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
