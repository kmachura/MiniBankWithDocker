import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'mini-bank';
  faCoffee = faCoffee;
  faAppleAlt = faAppleAlt;
  faWindowRestore  = faWindowRestore;
  faUser = faUser;
  faUserShield = faUserShield;
  faUserClock = faUserClock;
  constructor() { }

  ngOnInit(): void {
  }

}
