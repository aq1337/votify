import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBasicComponent } from './song-basic.component';

describe('SongBasicComponent', () => {
  let component: SongBasicComponent;
  let fixture: ComponentFixture<SongBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
