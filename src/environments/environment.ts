// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostURL: 'http://localhost:8100/',
  envName: 'local',  
  firebaseConfig: {
    apiKey: "AIzaSyCEocL3ubYqmlk-CFiAi71Y5r5GElH6jnY",
    authDomain: "devportfoliowebsite.firebaseapp.com",
    projectId: "devportfoliowebsite",
    storageBucket: "devportfoliowebsite.appspot.com",
    messagingSenderId: "113915178274",
    appId: "1:113915178274:web:4a144b5923d28309e3c97b",
    measurementId: "G-M04XCDY6L8"
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
