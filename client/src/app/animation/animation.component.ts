import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  words: Array<string> = ['Learning is not impossible!!!', 'imparare non è impossibile!!!', 'Aprender no es imposible!!'];
  word:string;
  char:string;
  idx:number=0;
  n: number=0;
  up:boolean = true;
  //id:NodeJS.Timer;

  constructor() {}

  ngOnInit() {

    this.changeText();
    //preguntar asignar a this.id
    setInterval(()=>{
      this.changeText()
    },200)
  
  }
  
  /*ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }*/

  changeText(){

      this.word = this.words[this.idx];
      if(this.up){
        this.char = this.word.slice(0,this.n);
        this.n++
      };
      if(this.n===this.word.length+1){this.up=false};
      if(!this.up){
        this.char = this.word.slice(0,this.n);
        this.n--
      }
      if(this.n===0){
        this.up=true
        this.idx++
      }
      if(this.idx===this.words.length){this.idx=0} 
  }

}
