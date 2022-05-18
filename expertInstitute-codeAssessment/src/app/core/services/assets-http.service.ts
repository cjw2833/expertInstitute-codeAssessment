import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { routerPaths } from "../constants/router-paths";
import { Asset } from '../models/asset';
import { HttpClient } from '@angular/common/http';

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
  public getAllAssets(): Observable<any> {
    return this.httpClient.get<any>(this.baseCoinCapAssetsApiPath+'assets');
  }

 /**
   * GET Request to retrieve a specific asset by id
   */
//   public getAssetById(): Observable<Assets> {
//     return this.webappService.httpGet(this.baseApiStatusCenterPath + '/contactInfo').pipe(
//         catchError(error => this.handleError(error))
//     );
//   }
}



