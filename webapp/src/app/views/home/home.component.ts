import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/data/song';
import { SONGS } from 'src/app/data/mock-songs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs:Song[] = SONGS;
  constructor() { }

  ngOnInit(): void {
    console.log(this.songs)
  }

}
