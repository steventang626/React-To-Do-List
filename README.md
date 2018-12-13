# React-To-Do-List

This is a simple to-do-list web application implemented using React and Semantic UI React. Using this application, you can add a new task, mark tasks as finished and select to show and hide finished tasks.

![Capture1](https://raw.githubusercontent.com/steventang626/Markdown-Photos/master/Photos/todo1.png)

## Usage

#### `npm install`

Install Node modules listed in `./package.json`

#### `npm start`

Run the React application. View in the browser at `localhost:3000`

## Structure

```
.
├── public                       # Default static files
└── src                          # Application source code
    ├── views                    
        ├── css                  # Style Sheets Directory
            ├── App.css       
            └── index.css         
        ├── App.js               # The main component of this application
        ├── TodoItems.js         # To-do list items' components
        └── TodoList.js          # To-do list's component
    ├── test               		 # Test Directory
    	└── init.js              # Simple rendering test
    └── index.js                 # The initial page
```

## Built With

* [React](https://reactjs.org) - A JavaScript library for building user interfaces
* [Semantic UI React](https://react.semantic-ui.com/) - The official Semantic-UI-React integration

## Authors

* **Yuhan Tang**

## License

This project is licensed under the MIT License.

