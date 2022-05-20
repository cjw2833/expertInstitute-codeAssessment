import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { routerPaths } from "../constants/router-paths";
import { HttpClient } from '@angular/common/http';
import { Asset } from '../models/asset';

/**
 * Assets HTTP Service
 */
@Injectable()
export class AssetsHttpService {

    private baseCoinCapAssetsApiPath: string = 'https://api.coincap.io/v2/';

  constructor(
    private router: Router,
    // private logger: NGXLogger,
    private httpClient: HttpClient,) {
  }

   handleError(error: Response): Observable<any> {
    // this.logger.error(error);
    this.router.navigate([routerPaths.pageUnavailable]);
    return of(null);
  }

  /**
   * GET Request to retrieve all assets
   */
  public getAllAssets(): Observable<Asset[]> {
    return this.httpClient.get<Asset[]>(this.baseCoinCapAssetsApiPath+'assets');
  }

 /**
   * GET Request to retrieve a specific currency by id and time interval(m1, m5, m15, m30, h1, h2, h6, h12, d1)
   */
  public getAssetById(assetId: string, interval: string): Observable<any> {
    return this.httpClient.get<any>(this.baseCoinCapAssetsApiPath+`assets/${assetId}/history?interval=${interval}`);
  }

  /**
  * GET Request to retrieve a specific currencies price history and time interval(m1, m5, m15, m30, h1, h2, h6, h12, d1)
  */
  public getAssetHistory(assetId: string, interval: string): Observable<any> {
    return this.httpClient.get<any>(this.baseCoinCapAssetsApiPath+`assets/${assetId}/history?interval=${interval}`);
  }
}

