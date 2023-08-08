# The LunchBox App

A new app for snack recommendations. You can view yummy snacks, edit existing snacks, create new snacks. Welcome to <strong>The LunchBox</strong>.

Team: Ambarimar Ulloa, Angel Wu, Michelle Harley

## Instructions on Installing This Project

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open the repository in VSCode.

   ```
   code .
   ```

## Features

We built a React application that allows for CRUD operations to be performed on a single resource, SNACKS.

### Navigation Bar

The navigation bar will be present one every page where you will have the option to create a new snack.

### Snacks Index Page

The Snacks Index page presents all of the resources in our database table.
When a snack is clicked, you will be brought to the snacks Show page.

### Snack Show Page

The snack Show Page includes more detailed information about the specific snack.
You can also edit the existing snack's details on an Edit Form page.
When done editing, you will get sent back to that snack's updated show page.
You will also have the option to delete a snack which will ask you to confirm before deleting the snack and bringing you back to the Snacks Index page.

### New Snack Form

When the create new snack button in the navigation bar is clicked, you will be brought to a new page that includes a form to create a new snack.

The new snack form is labeled and type inputs are properly set.

When you submit the new snack form, the new snack will be created in the database and you will be brought to that snack's show page.

## Dependencies

The Snack App Frontend relies on the following dependencies:
`React` - A JavaScript library for building user interfaces.

`axios` -
A promise-based HTTP client for making API requests.

`react-router-dom` - A routing library for React applications.

Backend [GitHub](https://github.com/angels178/lunchbox-backend)
