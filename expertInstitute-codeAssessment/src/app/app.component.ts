import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expertInstitute-codeAssessment';
  public selection: number = 0;
  public myAssets: number = 0;
  public result: number = 0;
  
  public calculateAssets(){
    this.result = this.myAssets * this.selection;
  };
}
