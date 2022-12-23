# Food recipe searching website using HTML, Sass & Vanilla JavaScript 



![demo image](https://user-images.githubusercontent.com/52010932/181517640-9d1a0337-e652-4c48-bd53-9aa54e3e9a64.png)


## Link of the website
[visit here](https://searchanyrecipe.netlify.app/)


## Description

If you are passionate about cooking delicious foods & need some directions about the recipes, then this is the right place for you to dig in. Here, you can search for over 10,000 of recipes of some of the world's most appetizing, mouth-watering & flavoursome foods.





## How to run the project ?

After cloning the repository into your local computer, use the following commands to run the project -

```markdown
cd Searching-Recipes

npm install

npm run dev
```





## Features


- `Search box`  Search for the recipes you want.

  ![search box](https://user-images.githubusercontent.com/52010932/181518999-2bf993ab-967c-489f-984f-5be75b5266db.png)




- `Search results`  Search results will be shown according to the users input value.

  ![Search results](https://user-images.githubusercontent.com/52010932/181518335-dc0dea3b-ad17-4210-b9ee-75a7257723b8.png)




- `Pagination buttons`  Pagination buttons are also rendered with respect to the number of recipes available according the input value given by the user. Each page contains only 10 results & if the number of results are more than 10, then pagination buttons will be rendered accordingly.                                                For example, if  there are 50 items available for "Pizza", then, five pages will be there, each page will have 10 items with pagination buttons rendered accordingly.

  ![pagination](https://user-images.githubusercontent.com/52010932/181518442-358fafc7-97b1-4853-8a4c-cc722be04645.png)




- `servings`  Recipe ingredients will be updated according the number of servings.

  ![servings](https://user-images.githubusercontent.com/52010932/181518547-6d119ea9-587c-42bd-ae2e-4cc663216699.png)

   





## Technology stack

### 1. Programming languages used:

- HTML
- CSS
- Sass
- JavaScript



### 2. Dev-dependencies:

`"package.json"`

```javascript
{
  "name": "starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "fractional": "^1.0.0",
    "parcel-bundler": "^1.12.5",
    "sass": "^1.53.0"
  },
  "dependencies": {
    "core-js": "^3.23.3",
    "fractions": "^1.0.2",
    "regenerator-runtime": "^0.13.9"
  }
}
```



### 3. Structure of the project:

The Model-View-Controller (MVC) is **an architectural pattern that separates an application into three main logical components: the model, the view, and the controller**. Each of these components are built to handle specific development aspects of an application. This architecture has been implemented to structure this particular project.



![mvc](https://user-images.githubusercontent.com/52010932/181521102-36d0b4f8-07f8-496d-bb67-0823b5cc5b9e.png)



### 4. Workflow:

 

![SearchRecipes drawio](https://user-images.githubusercontent.com/52010932/181521305-dcdf219c-ee20-4358-b9c2-175336fc8d2a.png)



