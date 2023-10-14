import { Injectable } from '@angular/core';
import { Observable, from, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {
  private db!: IDBDatabase;

  constructor() {
  }
  private openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('GETCURIOUS', 1);
      request.onupgradeneeded = (event: any) => {
        this.db = event.target.result;
        this.db.createObjectStore('curious', { keyPath: 'id' });
      };
      request.onsuccess = (event: any) => {
        this.db = event.target.result;
        resolve(this.db);
      };
      request.onerror = (event: any) => {
        console.error('Error opening database:', event.target.error);
        reject(event.target.error);
      };
    });
  }


  getData(key: string): Observable<any> {
    return new Observable((observer) => {
      this.openDatabase().then(() => {
        const transaction = this.db.transaction(['curious'], 'readonly');
        const objectStore = transaction.objectStore('curious');
        const request = objectStore.get(key);
        request.onsuccess = (event: any) => {
          const data = event.target.result;
          observer.next(data ? data.value : null);
          observer.complete();
        };
        request.onerror = (event: any) => {
          // console.error('Error retrieving data from IndexedDB:', event.target.error);
          // observer.error(event.target.error);
          observer.next(null);
        };
      }).catch((error: any) => {
        // console.error('Error opening IndexedDB:', error);
        // observer.error(error);
        observer.next(null);
      });
    });
  }

  storeData(key: string, data: any) {
    const transaction = this.db.transaction(['curious'], 'readwrite');
    const objectStore = transaction.objectStore('curious');
    objectStore.put({ id: key, value: data });
  }

}
