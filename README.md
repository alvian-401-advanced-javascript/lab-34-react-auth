

## Auth

### Author: Alvian Joseph

### Links and Resources
* [repo](https://github.com/alvian-401-advanced-javascript/lab-34-react-auth)
* [Code Sandbox](https://codesandbox.io/s/lab-34-auth-ey4d3)

### Modules
#### React Components
##### `index.js`
Entry point for React application. Imports `app.js`

##### `app.js`
Function component that imports `todo.js`and `todo-list.js` and renders their output
inside a single section element.

##### `todo.js`
Single function component `ToDo()` that
imports `useForm` hook from `./src/hooks/form.js` 
Returns form with multiple lables and inputs, from data
is posted to server using `saveFormDataToServer()`method.

##### todo.js methods
`saveFormDataToServer()`takes form data as a param, converts the data to json,
and uses fetch to post the data to the server

##### todo.js hooks
`./src/hooks/form.js`
* imports useState hook from react
defines getter and setter for form values 

```
const [values, setValues] = useState({});
```
* creates `handleChange` event listener that uses `setValues`to
compile the form data as it's being typed by the user

* creates `handleSubmit`event listner that runs a callback on whatever the
current state of the`values`getter is

* returns an array with both handle functions and the values state and exports as useForm 

#### todo-list.js 
* imports useQ hook from `./src/hooks/q.js`
* imports useState and useEffect from react 
* defines getter and setter for list items

```
const [items, setItems] = useState([])
```
* sets an event listener on the `database` event that
checks for changes to the list
* defines `handleNewItem`function that takes in an item
and changes the state of `items` using the state hook
and spread operator
* uses `useEffect` hook to subscribe to the `create`event
then fetches data from api server
* returns a single UL filled out by mapping over the items array

#### UML
![UML Diagram]()
