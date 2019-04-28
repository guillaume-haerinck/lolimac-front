import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss']
})
export class TopAppBarComponent implements OnInit {
  @Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
