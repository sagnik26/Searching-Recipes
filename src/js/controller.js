'use strict';

import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// if (module.hot) {
//   module.hot.accept();
// }


const controlRecipe = async function() {
  try {

    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner();

    // (1) Loading recipe
    await model.loadRecipe(id);

    // (2) rendering recipe
    recipeView.render(model.state.recipe);

  }
  catch(err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {

    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;
    resultsView.renderSpinner();

    // 2) Load search data
    await model.loadSearchResults(query);
  
    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultspage(3));

    // 4) render pagination buttons
    paginationView.render(model.state.search); 
} 
  
  catch(err) {
    console.log(err);
  }

}


const controlPagination = function(goTopage) {
    // 3) Render new results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultspage(goTopage));

    // 4) render new pagination buttons
    paginationView.render(model.state.search); 
}


const controlServings = function(newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // update the recipe view
  recipeView.render(model.state.recipe);
}


const init = function() {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerRender(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  
};

init();


