# Nology Assignment - React App

## Project Specs

Build a website using REACT.<br>
Make use of the Punk API to retrieve and show data.<br>
Test with RTL.<br>
Have a single page with cards of the beers.<br>
Have a sidebar for searching and filtering the results.<br>

### Component Tree
<pre>
App
 |- Main
 |   L CardList
 |       L Card
 L NavBar
     |- SearchBox
     L- FiltersList
          L FilterItem
</pre>
The data is retrieved as an array of objects from the API.<br>
Data is passed to NavBar, which passes it to the search and filter components.<br>
The filtered data is returned up to App, then passed down through to CardList.<br>
CardList maps over the array and displays a card for each object in the array.<br>
