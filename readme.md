## Install:

`$ npm i `  
  
_Note: installing pupeteer sometimes requires admin & network permissions_  

## Adding new components for testing:

 1. Add a new story to Storybook  
 2. Get individual Story URL by clicking on it  
 3. Add the story to "scenarios" array in backstop.json  
  
## Run visual regression tests:
`$ npm run storybook`  
`$ backstop test`