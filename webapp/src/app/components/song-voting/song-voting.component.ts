import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/data/song';

@Component({
  selector: 'app-song-voting',
  templateUrl: './song-voting.component.html',
  styleUrls: ['./song-voting.component.css']
})
export class SongVotingComponent implements OnInit {

  @Input() song!: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
