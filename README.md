# React Cards
This React Cards exercise features two APIs, Deck of Cards API and Pokemon API, to generate cards which can be interacted with. Users can draw playing cards or Pokemon cards. This exercise demonstrates the use of custom React hooks. 


## Features
1. Playing Cards
- Fetches cards from the Deck of Cards API. 
- Cards can be flipped.
- Deck can be reset. 

2. Pokemon Cards
- Fetches Pokemon data from the Pokemon API
- Users can select a pokemon from the list and add it to the display. 
- The Pokemon card displays its image and stats and can be flipped.
- Users can randomly get a Pokemon.
- Card display can be reset.

## Custom Hooks
1. useFlip: toggles the flip state of a card
2. useAxios: manages API requests, response state, and clears the state.

## Installation 
1. git clone https://github.com/equach18/react-cards-pokemon.git
2. cd react-cards-pokemon (or project folder name)
3. npm install 
4. npm start