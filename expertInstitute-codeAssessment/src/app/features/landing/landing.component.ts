import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/core/models/asset';
import { CoreService } from 'src/app/core/services/core.service';


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
    console.log(this.allAssets);
  }

  public getAllAssets() {
    this.coreService.getAllAssets().subscribe(data => {
      this.allAssets = data.data;
    });
  }

  // public currencySearch(userInput: string): void {
  //   this.filteredAssets = this.allAssets.filter((val) => val.name.toLowerCase().includes(userInput));
  // }

  public filterBadges(badgeId: number): void {
    switch(badgeId){
      case 0: { // Downward Trend
        console.log('downward');
        this.filteredAssets = this.allAssets.filter((val) => val.changePercent24Hr <= 0);

        this.downwardTrend = !this.downwardTrend;
        this.upwardTrend = false;
        console.log(this.filteredAssets);
        break; 
      }

      case 1: { // Upward Trend
        console.log('upward');
        this.filteredAssets = this.allAssets.filter((val) => val.changePercent24Hr > 0); 
        this.upwardTrend = !this.upwardTrend;
        this.downwardTrend = false;
        break; 
      }

      case 2: { // Alphabetical
        console.log('alphabetical');
        this.filteredAssets = this.allAssets.sort(function(a, b){
          if (a.name < b.name) {return -1;}
          if (a.name > b.name) {return 1;}
          return 0;
        });

        this.alphabetical = !this.alphabetical;
        break; 
      }

      case 3: { // Cost
        console.log('cost');
        this.allAssets = this.allAssets.sort(function(a, b){
          return a.priceUsd-b.priceUsd;
        });
        console.log(this.allAssets);
        
        this.cost = !this.cost;
        break; 
      }
    }
  }

  public displayAsset(asset: Asset) {
    console.log(asset);
    this.assetName = asset.name;
  }
}
