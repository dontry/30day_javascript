### AJAX And Remote Data
---

## Fetch
The fetch() function is a Promise-based mechanism for programatically making web requests in the browser.

#### HTML
```javascript
fetch('/users.html')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    document.body.innerHTML = body
  })
```

#### JSON
```javascript
fetch('/users.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

---

## React
Creating Components

1. #### React.creatClass()
```javascript
    const Component1 = React.createClass({
            getInitialState() {
                ...
            }
            getDefaultProps() {
                ...
            }
            render() {
               return ...
            }
        })
```
2. #### React.Component{}
```javascript
    class Component2 extends React.Component{
        constructor(props) {
            super(props);
            ...
        }
        render() {
            return ...
        }
    }
```

3. #### ES5 
```javascript
     var Component3 = function(props) {
         ...
        return ...
    }
```

4. #### ES6 
```javascript
    const Component4 = (props) => {
        ...
        return ...
    }
```

### The advantages of functional components
+ Simplistic: no contructor, no state, life-cycle, etc
+ No need to bind because of no the keyword *this*
+ Very fast
+ Easy to reuse
+ Fit for presentational components focusing on UI only

---

## RegExp
Create an object of RegExp 
```javascript
const regex = new RegExp(keyword, 'gi');  
```

