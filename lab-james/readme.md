# Lab 25 - Cute Bunny Gallery
The purpose of this app is to allow a user to view multiple albums and their respective images. Included is the album's name and a short description of the album. Within that is another array that holds the images themselves. They also come with a title and short description, as well as an image.

On the `home page` all albums are listed by `name` and `description`. By clicking on one of the `albums` the `view` is changed to show the `images` in that `album`. By default it will start with a `list view`, however, there are `two buttons` included to switch between a `grid (thumbnail)` or `list view`.

Upon clicking one of the `image thumbnails/list items` a `fullsize` version of that `image` will be displayed. There is a `back button` that is included when the `fullsize` content is rendered. It will take the user back to their previously viewed `album` and will retain the display mode they were using `(grid or list)`.

`Angular` and `Angular Route` are both used to render data to the page via `Controllers` and `Directives`. `Font Awesome` is also used in this app to add some style to the nav bar links.

## Installation & Usage
To install, first `clone` down this repo. Next, make sure and install dependencies via `npm i`. Then, to access the app, type `npm run watch` in your command line and open your browser to the URL `http://localhost:8080`.

## Testing
For convenience, scripts have been added in the `package.json` file to allow for simple testing.

To run a `lint` test, simply type `npm run lint` in your command line.
