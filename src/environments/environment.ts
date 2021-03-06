// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BNET_ID: "bcbd43f7d97d4871b79ed20d15428196",
  BNET_SECRET: "dR5WaGeIDqHXXSDEmmnWI4zCpEnuyQfn",
  MOUNT_API: "https://us.api.blizzard.com/wow/mount/?",
  TOKEN_API: "https://us.battle.net/oauth/token?",
  CHARACTER_API: "https://us.api.blizzard.com/wow/character/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.