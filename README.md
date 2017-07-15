# DevLibs

Inspired by the MadLibs game, this variant is for Developers.

## Requirements

- Docker.
- GNU Make (already on OSX, Linux)
- Port `8080` on host.

## Current status - mock NGINX server

No current app functionality exists, only a mocked front-end server (NGINX).
 
The next step is to build out the backend server with database backed data.

## Run a mock/static DevLibs API service
    
    make api-run
    
## Run DevLibs terminal front-end

    make terminal-run

**Note:** A work in progress. Right now, it just opens a Python interactive session.

## Consuming the mock/static API

The below examples use jQuery.

### Get libs

    $.getJSON('http://localhost:8080/api/v1/libs/')

### Get a random libs
    
    $.getJSON('http://localhost:8080/api/v1/libs/random')

### Add a lib (faked, even though response code is 201)

These header `Authorization` and `X_CSRF_TOKEN` token aren't validated in the mock API but will be for the real API.

    $.ajax({
        url: 'http://localhost:8080/api/v1/libs/',
        type: 'POST',
        headers: {
            'Authorization':'Basic bf00d8c4-2e17-4cb4-a346-f4c10b22f42b',
            'X_CSRF_TOKEN':'e46f10f8-307c-4630-bec0-ab4a93c9cb16',
            'Content-Type':'application/json'
        },    
        data: JSON.stringify({ text: 'Whenever I see a {{lang}} programmers code, it makes me want to {{verb}} like a {{noun}}.'}),
        dataType: 'json',
        crossDomain: true
    });

## Run the Angular project

1. Make sure you have [NPM](https://www.npmjs.com/) installed.
2. Navigate into the `client` directory and run `npm install`.
4. Start the Angular server by running `ng serve`.
5. Navigate to `http://localhost:4200` to see the project running.
