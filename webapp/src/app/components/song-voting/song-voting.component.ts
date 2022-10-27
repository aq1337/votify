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

  isNegativeVote: boolean | null = null;
  isPositiveVote: boolean | null = null;

  ngOnInit(): void {
    
  }

  onVote(id:string){
    switch(id){
      case "dvE":
        this.isNegativeVote = true;
        this.isPositiveVote = false;
        break;
      case "dvF":
        this.isNegativeVote = false;
        this.isPositiveVote = false;
        break;
      case "uvF":
        this.isNegativeVote = false;
        this.isPositiveVote = false;
        break;
      case "uvE":
        this.isNegativeVote = false;
        this.isPositiveVote = true;
        break;
    }
  }

}
