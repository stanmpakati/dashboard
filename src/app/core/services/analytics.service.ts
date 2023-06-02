import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ChartSeries } from '@ui-core-model/response';

const analyticsUrl = `${environment.ANALYTICS_SERVICE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  public getReferrers(startDate: Date, endDate: Date): Observable<ChartSeries> {
    // return this.http.get<ChartSeries>(`${analyticsUrl}/referrers?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`);
    // return of([{"name":"DESKTOP","count":1}])
    return of({
      labels: ["google.com", "", "facebook.com", "bing.com"],
      data: [18, 15, 7, 3]
    })
  }

  public getDeviceType(startDate: Date, endDate: Date): Observable<ChartSeries> {
    return of({
      labels: ["DESKTOP", "MOBILE", "TABLET"],
      data: [8, 5, 1]
    })
  }

}