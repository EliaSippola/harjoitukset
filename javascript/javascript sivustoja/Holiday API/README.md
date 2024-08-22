## Features:
Will count pay and double it if the day is a holiday.
Currently only supports Finnish holidays. 

The site will disable the button during the api call, and show "loading" cursor.

You can add more holidays to the `select` in `holiday.html`. The Country codes go to the `value` tag. Use https://docs.abstractapi.com/holidays?_gl=1*15mhx2j*_gcl_au*MTYyMDg4MDQzMy4xNzI0MzE2ODI4 to see the possible country codes.

## Installation:
For the website to work, you need to create `secret.js` file that has the api key. This has been removed from GitHub to keep the API secret.

`secret.js`:
```JS
export function getApiKey() {
    return "<api_key>";
}
```

Get your own api key from https://www.abstractapi.com/api/holidays-api

After this, you can open the server in VSCode Live Server (or some other static website host)

DO NOT USE THE WEBSITE IN PRODUCTION. API KEY NEEDS TO BE SECURED BETTER.