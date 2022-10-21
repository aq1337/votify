import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVotingComponent } from './song-voting.component';

describe('SongVotingComponent', () => {
  let component: SongVotingComponent;
  let fixture: ComponentFixture<SongVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongVotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
