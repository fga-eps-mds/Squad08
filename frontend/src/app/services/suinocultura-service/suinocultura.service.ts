import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SuinoculturaService extends HttpBaseService {

  private endpointAbatidos: string = 'suinocultura/abatidos';
  private endpointPeso: string = 'suinocultura/peso';

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  // criar uma interface para esse retorno..
  listAbatidos(): Observable<any> {
    return this.httpGet(this.endpointAbatidos);
  }

  // criar uma interface para esse retorno..
  listPeso(): Observable<any> {
    return this.httpGet(this.endpointPeso);
  }

}