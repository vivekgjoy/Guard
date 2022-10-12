import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value:boolean=true;
  canDeactivate():Observable<boolean> | boolean{
    if (this.value){
      window.confirm("Data loss! Want to Exit..? ")
      return true;
    }
    return false;
  }

}
