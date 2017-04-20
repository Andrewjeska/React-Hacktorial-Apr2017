# React-Hacktorial-Apr2017
Files for the React Hacktorial on April 20th, 2017.

React is a popular frontend web framework used by companies such as Facebook and AirBnb. It makes building complicated UIs painlessly, by dividing elements of the page into Components. Flux is an architecture that works very well for react. It utilizes unidirectional data flow for updating react components.

[Slides](https://docs.google.com/presentation/d/1cfCbJOgtvmY-V5zwi2DDbI8mxhjsho-fhDicO3jFXig/edit?usp=sharing)


Today, we're going to build a schedule builder using umd.io

## Setup

Instructions on installing node and npm can be found [here](https://nodejs.org/en/download/package-manager/)  

To verify that you have node and npm installed, run in a Terminal or Command Prompt

``` 
node -v
npm -v
```

Next, we're going to install create-react-app. There are many ways to start a react project, but this is the simplest.

```
npm install -g create-react-app
```

Then, in whatever directory you choose, create the project and enter it. 

``` 
create-react-app project_name
cd project_name
```

To view the project in your default browser, run:

```
npm start
```

## Optional

There's an extension for chrome called "React Developer Tools". It offers some more debugging info. [Install it here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)