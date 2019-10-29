## Storybook:
![alt text](https://i.ibb.co/WPnjdyv/Screenshot-2019-10-29-at-14-57-17.png "")

## Backstop.js Diff:

![alt text](https://i.ibb.co/qjLJHXT/Screenshot-2019-10-29-at-14-39-09.png "")

## Install:

`$ npm i `  
  
_Note: installing pupeteer sometimes requires admin & network permissions_  

## Adding new components for testing:

 1. Add a new story to Storybook  
 2. Get individual Story URL by clicking on it  
 3. Add the story to "scenarios" array in backstop.json  
  
## Run visual regression tests:
`$ npm run storybook`  
`$ backstop test` - to run visual test
`$ backstop approve` - to approve a change to be used as a reference
