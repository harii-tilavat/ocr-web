import { Injectable, Inject } from '@angular/core';
import { JWT_OPTIONS } from './jwtoptions.token';
import { DecodedToken } from './jwt.model';

@Injectable()
export class JwtHelperService {
  tokenGetter: () => string;
  userProfileGetter: () => string;
  activeWorkSpaceId: () => string;
  activeWorkSpaceRole: () => string;
  constructor(@Inject(JWT_OPTIONS) config: any = null) {
    // tslint:disable-next-line: space-before-function-paren
    // tslint:disable-next-line: only-arrow-functions
    this.tokenGetter = config && config.tokenGetter || function () { };
    this.userProfileGetter = config && config.userProfileGetter || function () { };
    this.activeWorkSpaceId = config && config.activeWorkSpaceId || function () { };
    this.activeWorkSpaceRole = config && config.activeWorkSpaceRole || function () { };
  }

  public urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += '==';
        break;
      }
      case 3: {
        output += '=';
        break;
      }
      default: {
        throw new Error('Illegal base64url string!');
      }
    }
    return this.b64DecodeUnicode(output);
  }

  // credits for decoder goes to https://github.com/atk
  private b64decode(str: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';

    str = String(str).replace(/=+$/, '');

    if (str.length % 4 === 1) {
      throw new Error('\'atob\' failed: The string to be decoded is not correctly encoded.');
    }
    for (
      // initialize result and counters
      let bc = 0, bs: any, buffer: any, idx = 0;
      // get next character
      // tslint:disable-next-line: no-conditional-assignment
      (buffer = str.charAt(idx++));
      // character found in table? initialize bit storage and add its ascii value;
      // tslint:disable-next-line: no-bitwise
      ~buffer &&
        (
          // tslint:disable-next-line: no-conditional-assignment
          (bs = bc % 4 ? bs * 64 + buffer : buffer),
          // and if not first of each 4 characters,
          // convert the first 8 bits to one ascii character
          bc++ % 4
        )
        // tslint:disable-next-line: no-bitwise
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  }

  private b64DecodeUnicode(str: any) {
    return decodeURIComponent(
      Array.prototype.map
        .call(this.b64decode(str), (c: any) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  public decodeToken(token: string = this.tokenGetter()): DecodedToken | null {
    if (token === null) {
      return null;
    }
    if (token === undefined) {
      return null;
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('The inspected token doesn\'t appear to be a JWT. please connect to Tech Team.');
    }
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token.');
    }
    return JSON.parse(decoded) as DecodedToken;
  }

  public getTokenExpirationDate(token: string = this.tokenGetter()): Date | null {
    let decoded: any;
    decoded = this.decodeToken(token);
    if (decoded) {
      if (!decoded.hasOwnProperty('exp')) {
        return null;
      } else {
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
      }
    }
    return null
  }

  public isTokenExpired(token: string = this.tokenGetter()): boolean {
    if (token === null || token === '') {
      return true;
    }
    this.decodeToken(token);
    const date = this.getTokenExpirationDate(token);
    if (date) {
      return !(new Date(date) > new Date());
    }
    return true;
  }
}
