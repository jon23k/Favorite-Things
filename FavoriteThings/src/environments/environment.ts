// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebaseConfig: {
    apiKey: "AIzaSyBLodIvxdsPciJtmUGYanRDhof60oHfKjY",
    authDomain: "favorite-things-28d3c.firebaseapp.com",
    databaseURL: "https://favorite-things-28d3c.firebaseio.com",
    projectId: "favorite-things-28d3c",
    storageBucket: "favorite-things-28d3c.appspot.com",
    messagingSenderId: "566588148655"
  },
};
