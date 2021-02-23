# Clinics - React App

## Used Packages:

     "@material-ui/core" &  "@material-ui/icons"

# Installing:

1. Created with "npx create-react-app".
2. Deleted the generated src folder and created a clean one.
3. Created needed files and folders, ('App structure'): Screens, Components, Hooks, etc..

# Building:

## Visual:

1. Took a screenshot of Myndlift logo from the website.
2. Used Photoshop to convert it to png with transparent background.
3. The closest font was Roboto so i used that font from google fonts.
4. Started from top to bottom, build the top bar with the logo as a seperate component.
5. Built a home screen to display everything needed in it.
6. Built Search bar, Card, Cardlist etc.. as a seperate components.
7. Done with the visual side and moving to the logical side.

## Logical:

1. Created a function that converts the json file into a filtered array of objects.
2. Added the convert function inside a Utils folder.
3. Created a custom hook for data filtering, called "useData", this custom hook returns a filtered array whenever it called. and returns an empty array on initalization.

## Running:

There was some warning and errors that i had to unit test the faulty compoenets, fixed the errors and warnings.
