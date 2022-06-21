# Nology Assignment - React App

[Github Pages deployment](https://carapaceonbear.github.io/nology-react-project/)

## Project Specs

Build a website using REACT.<br>
Make use of the Punk API to retrieve and show data.<br>
Test with RTL.<br>
Have a single page with cards of the beers.<br>
Have a sidebar for searching and filtering the results.<br>

-----------------------------------------------------------------------------------------------
![look](https://i.imgur.com/ZaM2Rlb.png)<br>

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

-----------------------------------------------------------------------------------------------
## Completed State
The page presents the data, fetched from the API. The search and filters work to pare down the results.<br>
Clicking on a card brings up an overlay with additional information on the beer.<br>
The page is responsive to different screen sizes, and features simple and appealing motion.<br>
This project demonstrates my understanding of REACT, and serves as an additional expample of what I can do with CSS.<br>
Limited testing has been completed using React testing library.
