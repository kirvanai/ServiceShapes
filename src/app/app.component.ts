import { Component } from '@angular/core';
import { AreaService } from './area.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
  len:number = 10;
  wid:number = 1; 
  area:number = 0; 
  shapes:string[] = [
    "square",
    "triangle",
    "rectangle",
    "circle",
    "oval"
  ];

  selected:string = this.shapes[0];
 
  //This pops a service object into existance for the rest of this component to use 
  //This is where the depency injection is happening in Angular
  constructor(private areaService:AreaService){

  }
  getSquareArea(){
    this.area = this.areaService.getSquare(this.len);
  }
  getRectangleArea(){
    this.area = this.areaService.getRectangle(this.len, this.wid);
  }

  getTriangleArea(){
    this.area = this.areaService.getTriangle(this.len, this.wid);
  }
  getCircleArea(){
    this.area = this.areaService.getCircle(this.len)
  }
  getOvalArea(){
    this.area = this.areaService.getOval(this.len, this.wid)
  }

  getTriangle(){
    return {
      height:0, 
      width: 0, 
      borderLeft: `${this.len * 5}px solid transparent `, 
      borderRight:`${this.len * 5}px solid transparent `,
      borderBottom:`${this.wid * 5}px solid red`   }
  }

  getCircle(){
    return{
      height: `${this.len * 5}px`,
      width: `${this.len * 5}px`,
      background: "red",
      borderRadius: `50%`}

    }

    getOval(){
      return{
        height: `${this.len * 5}px`,
        width: `${this.wid * 10}px`,
        background: "red",
        borderRadius: "100px/50px"
      }
    }
  }





