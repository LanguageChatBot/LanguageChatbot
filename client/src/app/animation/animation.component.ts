import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  items: Array<string> = ['first', 'second', 'third'];
  constructor() { }

  ngOnInit() {
  }

}
