import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/data/song';
import { SONGS } from 'src/app/data/mock-songs';
import { ServerApiService } from 'src/app/shared/server-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs:Song[] = SONGS;
  constructor(public rest: ServerApiService) { }

  ngOnInit(): void {
    this.rest.getSongs().subscribe((data:{}) =>{
      this.songs = data;
    }) 
  }

}
