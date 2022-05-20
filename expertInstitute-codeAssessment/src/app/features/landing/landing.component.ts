import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/core/models/asset';
import { CoreService } from 'src/app/core/services/core.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { AssetCandleData } from 'src/app/core/models/asset-candle-data';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  /**
   * @name options
   * @description chart options design set up
   */
  public options: EChartsOption = {};
  public allAssets: Asset[] = [];
  public currentAsset: Asset = {
    id: '',
    rank: 0,
    symbol: '',
    name: '',
    supply: 0,
    maxSupply: 0,
    marketCapUsd: 0,
    volumeUsd24Hr: 0,
    priceUsd: 0,
    changePercent24Hr: 0,
    vwap24Hr: 0,
    explorer: ''
  };
  public currentAssetPriceHistory: AssetCandleData[] = [];
  public searchInput: any;
  public downwardTrend: boolean = false;
  public upwardTrend: boolean = false;
  public alphabetical: boolean = false;
  public cost: boolean = false;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.getAllAssets();
    this.getCurrentAssetPriceHistory("bitcoin", 'd1'); // sets initial chart display to pull bitcoin data, upon selecting a currency chart will update
    setTimeout( () => {
      this.initChartOptions();
    }, 1000); 
  }

  public getAllAssets() {
    this.coreService.getAllAssets().pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          // this.logger.error(`There was a problem retrieving Assets data: ${error.message}`);
          // TODO: change to logger
          return of([]);
        } else {
          // TODO: log error
          return error;
          }
      })
    ).subscribe(response => {
      this.allAssets = response.data;
      this.currentAsset = this.allAssets[0];
    });
  }

  public getCurrentAssetPriceHistory(assetId: string, interval: string) {
    this.coreService.getAssetHistory(assetId, interval).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          // this.logger.error(`There was a problem retrieving Asset History data: ${error.message}`);
          // TODO: change to logger
          return of([]);
        } else {
          // TODO: log error
          return error;
          }
      })
    ).subscribe(response => {
      this.currentAssetPriceHistory = response.data;
    });
  }

  public initChartOptions() {
    this.options =  {
      legend: {
      data: ['Currency Price'],
      align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.formatTimestampToDate(this.currentAssetPriceHistory),
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Currency Price',
          type: 'bar',
          data: this.parsePriceData(this.currentAssetPriceHistory),
          animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  public filterBadges(badgeId: number): void {
    switch(badgeId){
      case 0: { // Alphabetical
        this.alphabetical = !this.alphabetical;
        break; 
      }

      case 1: { // Cost
        this.cost = !this.cost;
        break; 
      }
    }

    //TODO: add alphabetical and cost filters back in
    /*
      if(cost) {
        return list ? list.sort(function(a, b){ return a.priceUsd-b.priceUsd; }) : [];
      }

      if(alphabetical) {
        return list ? list.sort(function(a, b){
          if (a.name < b.name) {return -1;}
          if (a.name > b.name) {return 1;}
          return 0;
        }) : [];
      }
    */
  }

  /**  //TODO: add the moving average(MA5 & MA10) calculations and smoothed line chart back to chart
   * Calculates the average closing price of the given(candleCount) Candlesticks
   * @param dayCount 
   * @param data 
   * @returns result
   *
  public calculateMovingAverage(candleCount: number, candleData: AssetCandleData[]) {
    let result = [];
    for (let i = 0, len = candleData.length; i < len; i++) {
      if (i < candleCount) {
        result.push('-');
        continue;
      }
      let sum = 0;
      for (let j = 0; j < candleCount; j++) {
        sum += candleData[i - j].close;
      }
      result.push((sum / candleCount).toFixed(2));
    }
    return result;
  }
  */

  /**
   * Helper function to parse and format date data for asset chart interface from data array
   * @param assetData price data passed from parent function landing.component
   * @returns result: String array of formatted dates
   */
   private formatTimestampToDate(assetData: AssetCandleData[]): string[] {
    let result: string[] = [];

    for (let i = 0; i < assetData.length; i++) {
      let d = new Date(assetData[i].date);
      let s = (d.getMonth() + 1) + '-' + (d.getDate()); // Format: '04-28' aka my birthday :)
      result.push(s);
    }
    return result;
  }

  /**
   * Helper function to parse and format price data for asset chart interface from data array
   * @param assetData price data passed from parent function landing.component
   * @returns result: Number array of formatted dates
   */
     private parsePriceData(assetData: AssetCandleData[]): number[] {
      let result: number[] = [];
  
      for (let i = 0; i < assetData.length; i++) {
        let p = assetData[i].priceUsd;
        result.push(p);
      }
      return result;
    }

  public displayAsset(asset: Asset) {
    this.currentAsset = asset;
    this.getCurrentAssetPriceHistory(asset.id, 'd1');
    setTimeout( () => {
      this.initChartOptions();
    }, 500); 
  }

  public goToLearnMore() {
    window.open(this.currentAsset.explorer, "_blank");
  }
}
