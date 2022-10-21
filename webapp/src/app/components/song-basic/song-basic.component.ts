import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/data/song';

@Component({
  selector: 'app-song-basic',
  templateUrl: './song-basic.component.html',
  styleUrls: ['./song-basic.component.css']
})
export class SongBasicComponent implements OnInit {

  @Input() song!: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
