# Store
A tiny API wrapper for `localStorage` that lets you safely save numbers, arrays, objects and other data types.


## Usage and API

#### Include the store.min.js 

```javascript 
<script src="https://rawgit.com/Sonukr/store/master/store.min.js"></script>
```

#### Usage

```javascript

// define some data
var Array = [
  {
    name: 'Objects 1',
    count: 10
  },
  {
    name: 'Objects 2',
    count: 11
  }
];

var String = 'This is a text and i will save in store.';

// You can pas any kind of data type in value field like, array, object, string etc.
// save data into localStorage.
// API: store.set(key, value)
// key — string
// value - array
store.set('Array', Array); 

// save data into localStorage.
// API: store.set(key, value)
// key — string
// value - string
store.set('String', String); 

// get value from localStorage by key.
// API: store.get(key)
// key — string
store.get('Array');
> [{name: 'Objects 1',count: 10},{name: 'Objects 2',count: 11}]


// get value from localStorage by key.
// API: store.get(key)
// key — string
store.get('String');
> 'This is a text and i will save in store.';

// remove item from localStorage
store.remove('Array');
store.remove('String');

//get entire localStorage object
store.all
>  Storage {
     Array: "[{"name":"Objects 1","count":10},{"name":"Objects 2","count":11}]",
     String: ""This is a text and i will save in store."", length: 2
     }

// get localStorage items count
store.length
> 2

// or empty localStorage
store.clear();

```