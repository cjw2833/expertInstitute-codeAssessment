import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AssetsHttpService } from './assets-http.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private assetsHttpService: AssetsHttpService) {
  }

  /**
   * Get asset list from CoinCap API.
   */
  public getAllAssets(): Observable<any>  {
    return this.assetsHttpService.getAllAssets();
  }

  /**
   * Get asset price history list from CoinCap API.
   * @param id  string id of asset to retrieve
   * @param interval string of time intervals of data points
   */
  public getAssetHistory(assetId: string, interval: string): Observable<any>  {
    return this.assetsHttpService.getAssetById(assetId, interval);
  }
}
