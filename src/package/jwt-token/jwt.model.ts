export class JwtModel {
  decodedToken!: DecodedToken | null;
  expirationDate!: Date;
  isExpired!: boolean;
}

// export class DecodedToken {
//   email!: string;
//   id!: number;
//   mobile_no!: string;
//   sub!: string;
//   user_name!: string;
//   role!: string[];
//   scopes!: string[];
//   oauth_token!: string;
//   opcRandomCode!: string;
//   iss!: string;
//   iat!: number;
//   exp!: number;
//   nbf!: number;
//   jti!: string;
//   name?: string;
// }
export class DecodedToken {
  exp!: number;
  iat!: number;
  auth_time!: number;
  jti!: string;
  iss!: string;
  aud!: string;
  sub!: string;
  typ!: string;
  azp!: string;
  nonce!: string;
  session_state!: string;
  acr!: string;
  'allowed-origins': string[] = [];
  realm_access: Realmaccess = new Realmaccess;
  resource_access: Resourceaccess = new Resourceaccess;
  scope!: string;
  sid!: string;
  email_verified!: boolean;
  name!: string;
  preferred_username!: string;
  given_name!: string;
  family_name!: string;
  email!: string;
  type ?: string;
}

export class Resourceaccess {
  account: Realmaccess = new Realmaccess;
}

export class Realmaccess {
  roles: string[] = [];
}
