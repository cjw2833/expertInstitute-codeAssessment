import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
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
   * Get asset list from CoinCap API.
   * @param id  string id of asset to retrieve
   */
    //  public getAssetById(): Observable<any>  {
    //   return this.assetsHttpService.getAllAssets();
    // }
}
