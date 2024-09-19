import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  progress : any = '0';
  progressValue : any = '0';
  isPrgsBar : boolean = true;
  isInprocess : boolean = false;
  isDownArrow : boolean = false;
  isUpArrow : boolean = true;
  btnHide : boolean = false;

  ngOnInit(): void {

  }
  startProgressBar(){
    this.isPrgsBar = false;
    const intervalId = setInterval(() => {
      this.progressValue++;
      if (this.progressValue == 100) {
        clearInterval(intervalId);
        this.check();
      }
    }, 100);
    }
  
  check(){
    this.isPrgsBar = true;
    this.btnHide = true;
  }
   downArClick(){
     this.isUpArrow =false;
     this.isDownArrow = true;
     this.isInprocess = true
   }
   upArClick(){
     this.isUpArrow =true;
     this.isDownArrow = false;
     this.isInprocess = false;
   }
}
