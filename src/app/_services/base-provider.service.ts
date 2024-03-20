/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { NgbModal } from '../shared/ng-modal';

@Injectable()
export class BaseProviderService {
  public headers = new HttpHeaders();
  public httpOptions = { headers: this.headers };
  public http: HttpClient;
  public error!: Error;
  public status!: number;
  public ngbModal = NgbModal;
  constructor(http: HttpClient) {
    this.http = http as HttpClient;
    this.httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  getHeaders(): { headers: HttpHeaders } {
    // getting common headers for the REST call
    this.addHeader('Content-Type', 'application/json');
    return this.httpOptions;
  }
  addHeader(key: string, value: string): HttpHeaders {
    // Add a particular Header for the REST call
    return new HttpHeaders().set(key, value);
  }

  getJSONfromModel(requestModel: any) {
    // Converts an TO into string
    if (requestModel && requestModel instanceof HttpParams) {
      requestModel;
    } else {
      requestModel;
    }
    return requestModel;
  }
  getHttpHeaders(): HttpHeaders {
    const HttpUploadOptions = {
      headers: new HttpHeaders(),
    };
    return HttpUploadOptions.headers;
  }

  /*
   Function for POST call
   Parameters:
   resourceURL: The resource on which POST call has to be made.
   requestModel: The Request model to be sent along with the call.
   Return Type: : Observable<{} | HttpResponse<Object>>
   */
  makePostCall(resourceURL: string, requestModel: any): Observable<{} | HttpResponse<any>> {
    return this.http.post(resourceURL, this.getJSONfromModel(requestModel), { headers: this.getHttpHeaders() }).pipe(map(response => response), catchError(this.handleError));
  }

  /*
  Function for GET call
  Parameters:
  resourceURL: The resource on which POST call has to be made.
  Return Type: : Observable<{} | HttpResponse<Object>>
  */
  makeGetCall(resourceURL: string, __params?: URLSearchParams): Observable<any> {
    return this.http.get(resourceURL, { headers: this.getHttpHeaders(), observe: 'body' }).pipe(retry(0), map(response => response), catchError(this.handleError));
  }
  /*
  Function for DELETE call
  Parameters:
  resourceURL: The resource on which DELETE call has to be made.
  Return Type: : Observable<{} | HttpResponse<Object>>
  */
  makeDeleteCall(resourceURL: string): Observable<{} | HttpResponse<any>> {
    return this.http.delete(resourceURL, { headers: this.getHttpHeaders(), observe: 'body' }).pipe(retry(0), map(response => response), catchError(this.handleError));
  }
  /*
Function for PATCH call
Parameters:
resourceURL: The resource on which PATCH call has to be made.
requestModel: The Request model to be sent along with the call.
Return Type: Observable<T>
*/
  makePatchCall(resourceURL: string, requestModel: any) {
    return this.http.patch(resourceURL, this.getJSONfromModel(requestModel), { headers: this.getHttpHeaders() }).pipe(map(response => response), catchError(this.handleError));
  }

  /*
  Function for Upload file call
  Parameters:
  resourceURL: The resource on which PATCH call has to be made.
  requestModel: The Request model to be sent along with the call.
    Return Type: Observable<T>
  */
  makePutCall(resourceURL: string, requestModel: any) {
    return this.http.put(resourceURL, this.getJSONfromModel(requestModel), { headers: this.getHttpHeaders() }).pipe(map(response => response), catchError(this.handleError));
  }
  /*
  Function for PATCH call
  Parameters:
  resourceURL: The resource on which PATCH call has to be made.
  requestModel: The Request model to be sent along with the call.
  Return Type: Observable<T>
  */
  makeUploadCall(resourceURL: string, requestModel: FormData): Observable<{} | HttpResponse<any>> {
    return this.http.post(resourceURL, requestModel, { reportProgress: true, observe: 'events', headers: this.getHttpHeaders() }).pipe(map(response => response), catchError(this.handleError));
  }
  /*
 Function for PUT call
 Parameters:
 resourceURL: The resource on which PATCH call has to be made.
 requestModel: The Request model to be sent along with the call.
 Return Type: Observable<T>
 */
  makeBinaryPutCall(resourceURL: string, requestModel: any, type: string): Observable<number | any> {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ 'Content-Type': type }),
    };
    return this.http.put<any>(resourceURL, requestModel, { reportProgress: true, observe: 'events', headers: HttpUploadOptions.headers }).pipe(tap((event) => event), catchError(this.handleError));
  }
  /*
  Function for GET File call
  Parameters:
  resourceURL: The resource on which GET FILE call has to be made.
  requestModel: The Request model to be sent along with the call.
  Return Type: Observable<T>
  */
  makeGetFile(resourceURL: string, resType: any): Observable<{} | HttpResponse<any>> {
    return this.http.get(resourceURL, { responseType: resType }).pipe(catchError(this.handleError));
  }
  /*
 Function for POST File call
 Parameters:
 resourceURL: The resource on which POST FILE call has to be made.
 requestModel: The Request model to be sent along with the call.
 Return Type: Observable<T>
 */
  makePostFile(resourceURL: string, body: any, resType: any): Observable<{} | HttpResponse<any>> {
    return this.http.post(resourceURL, body, { responseType: resType }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 500 || error.status === 503) {
      let message = 'Oppsss... Something wen\'t wrong!';
      if (error.error && error.error.message) { message = error.error.message; }
      // Swal.mixin({ toast: true, position: 'bottom', customClass: { container: 'ud-swal-alert', title: 'text-center' }, showConfirmButton: false, timer: 3000 }).fire({ title: message });
      return throwError({ ...error.error as HttpEvent<any>, status: error.status, param: null });
    } else {
      if (error.status === 422) {
        return throwError({ ...error.error, status: error.status, param: null });
      }
      if (error.status === 403 && error.error && error.error.param) {
        return throwError({ ...error.error, status: error.status, param: error.error.param });
      }
      if (error.status === 400 && error.error && error.error.errors && error.error.errors.length && error.error.errors.length > 0 && error.error.errors[0].param && typeof error.error.errors[0].param === 'object' && error.error.errors[0].param.channel_participant_id) {
        return throwError({ ...error.error, status: error.status, param: error.error.errors[0].param.channel_participant_id });
      }
      if (error.error instanceof ErrorEvent) {
        return throwError({ ...error.error, status: error.status, param: null });
      } else {
        if (error.error && error.error.errors) {
          // let errorlist = error.error;
          if (error.error.errors.length && error.error.errors.length > 0) {
            const errorlist = error.error.errors.map((i: { message: Array<{ message: string, param: string }>, param: string }) => i.message) as Array<{ message: string, param: string }>;
            if (errorlist.length && errorlist.length > 0) {
              const param = errorlist[0].param || null
              return throwError({ ...error.error, status: error.status, param });
            }
          }
          return throwError({ ...error.error.errors, status: error.status, param: null });
        }
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        // console.error(`Backend returned code ${error.status}`);
        throw ({ error: { ...error.error }, status: error.status, param: null });
      }
    }
  }
}
