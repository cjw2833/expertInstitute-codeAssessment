import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/core/models/asset';
import { CoreService } from 'src/app/core/services/core.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public allAssets: Asset[] = [];
  public filteredAssets: Asset[] = [];
  public assetName: string = 'Bitcoin';
  public searchInput: any;
  public downwardTrend: boolean = false;
  public upwardTrend: boolean = false;
  public alphabetical: boolean = false;
  public cost: boolean = false;


  constructor(
    private coreService: CoreService,
  ) { }

  ngOnInit(): void {
    this.getAllAssets();
  }

  public getAllAssets() {
    this.coreService.getAllAssets().pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          // this.logger.error(`There was a problem retrieving NSLDS data: ${error.message}`);
          // TODO: change to logger
          return of([]);
        } else {
          return throwError(error);
          }
      })
    ).subscribe(response => {
      this.allAssets = response.data;
    });
  }

  public filterBadges(badgeId: number): void {
    switch(badgeId){
      case 0: { // Alphabetical
        console.log('alphabetical');
        this.alphabetical = !this.alphabetical;
        break; 
      }

      case 1: { // Cost
        console.log('cost');
        this.cost = !this.cost;
        break; 
      }
    }

    //TODO: add back filters
    // if(cost) {
    //   return list ? list.sort(function(a, b){ return a.priceUsd-b.priceUsd; }) : [];
    // }

    // if(alphabetical) {
    //   return list ? list.sort(function(a, b){
    //     if (a.name < b.name) {return -1;}
    //     if (a.name > b.name) {return 1;}
    //     return 0;
    //   }) : [];
    // }
  }

  public displayAsset(asset: Asset) {
    console.log(asset);
    this.assetName = asset.name;
  }
}
