import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { AssetCandleData } from 'src/app/core/models/asset-candle-data';

@Component({
  selector: 'asset-chart-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent implements OnInit {
  // TODO: Relocate ALL chart related variables and functions back to asset-card from landing.component and uncomment the asset-chart-card selector in landing.component.html
  /**
   * @name assetChartData
   * @description Currently selected assets price history and time interval(m1, m5, m15, m30, h1, h2, h6, h12, d1)
   * Sent by parents components: landing component,
   */
  @Input()
  public assetChartData: AssetCandleData[] = [];

  /**
   * @name options
   * @description chart options design set up
   */
  public options: EChartsOption = {};
  
  constructor() {}

  ngOnInit(): void {
    this.options =  {
      legend: {
      data: ['Currency Price'],
      align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.formatTimestampToDate(this.assetChartData),
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
          data: this.parsePriceData(this.assetChartData),
          animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  /**
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
        let p = Math.round((assetData[i].priceUsd + Number.EPSILON) * 100) / 100;
        result.push(p);
      }
      return result;
    }
}
