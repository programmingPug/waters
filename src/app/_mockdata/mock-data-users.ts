import { InMemoryDbService } from 'angular-in-memory-web-api';

/*
In no real application would I ever create and store a token in the DB but as I want to make this example without the need for BE calls, real DB's, etc...etc

KEY: waters

{
    "iss": "lazypug.net",
    "iat": 1536187501,
    "exp": 1567723501,
    "aud": "www.lazypug.net",
    "sub": "ckoch@lazypug.net",
    "firstName": "Christopher",
    "LastName": "Koch",
    "email": "ckoch@lazypug.net",
    "role": "B5",
    "id": "11"
}

{
    "iss": "lazypug.net",
    "iat": 1536187501,
    "exp": 1567723501,
    "aud": "www.lazypug.net",
    "sub": "rkoch@lazypug.net",
    "firstName": "Rebecca",
    "LastName": "Koch",
    "email": "rkoch@lazypug.net",
    "role": "B4",
    "id": "12"
}

{
    "iss": "lazypug.net",
    "iat": 1536187501,
    "exp": 1567723501,
    "aud": "www.lazypug.net",
    "sub": "hkoch@lazypug.net",
    "firstName": "Henry",
    "LastName": "Koch",
    "email": "hkoch@lazypug.net",
    "role": "B2",
    "id": "13"
}

*/

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 11,
        firstName: "Christopher",
        lastName: "Koch",
        role: "B5",
        email: "ckochXlazypug.net",
        userName: "ckoch",
        password: "test",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJja29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IkNocmlzdG9waGVyIiwiTGFzdE5hbWUiOiJLb2NoIiwiZW1haWwiOiJja29jaEBsYXp5cHVnLm5ldCIsInJvbGUiOiJCNSIsImlkIjoiMTEifQ.UcIStKvZdYqWKho1I1tVta8zNLQD7KpP4n8l93wStEI"
      },
      {
        id: 12,
        firstName: "Rebecca",
        lastName: "Koch",
        role: "B4",
        email: "rkoch@lazypug.net",
        userName: "rkoch",
        password: "test2",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJya29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IlJlYmVjY2EiLCJMYXN0TmFtZSI6IktvY2giLCJlbWFpbCI6InJrb2NoQGxhenlwdWcubmV0Iiwicm9sZSI6IkI0IiwiaWQiOiIxMiJ9.baXMibtXAEUbbm1Nf4VP0yefFovR2-QHpRqzLQO7CtM"
      },
      {
        id: 13,
        firstName: "Henry",
        lastName: "Koch",
        role: "B2",
        email: "hkoch@lazypug.net",
        userName: "hkoch",
        password: "test3",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJoa29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IkhlbnJ5IiwiTGFzdE5hbWUiOiJLb2NoIiwiZW1haWwiOiJoa29jaEBsYXp5cHVnLm5ldCIsInJvbGUiOiJCMiIsImlkIjoiMTMifQ.Y6g9h4knKoawHmQEqT9A0UGOwYr4fKENyJ1O3MP6H5g"
      }
    ];
    return {users};
  }
}