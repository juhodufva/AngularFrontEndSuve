import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laskin',
  templateUrl: './laskin.component.html',
  styleUrls: ['./laskin.component.css']
})
export class LaskinComponent implements OnInit {
  result: string = " ";
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  



  addValue(value: string): void {

    if (value == '=') {
      try {
        this.result = eval(this.result);
      }
      catch (error) {
        this.result = "ERROR"
      }
    }
    else if (value == 'C') {
      this.result = '';
    }
    else {
      this.result = this.result + value;
    }
  }

  constructor() { }



  ngOnInit(): void {
  }
}
export class GridListOverwiwExample { }





