import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/data/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  song: Song = {
    id: 1,
    title: "Doomsday",
    interpreter: "Architects"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
