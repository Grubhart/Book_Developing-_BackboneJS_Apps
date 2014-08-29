var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

//Now we can create our concrete instance of the model with the default values as follows:
var todo1 = new Todo();

//Following logs: {"title":"","completed":false}
console.log(JSON.stringify(todo1));

//Our we could instantiate it with some of the attributes (e.g., with custom title)
var todo2 = new Todo({
    title: 'Check attributes of the logged models in the console.'
});

//Following logs: {"title":"Check attributes of the logged models in the console.","completed":false}
console.log(JSON.stringify(todo2));

// or override all the default attributes
var todo3 = new Todo({
   title: 'This item is done, so take no action on this one.',
   completed: true
});

//Following logs: {"title":"This item is done, so take no action on this one." ,"completed":true}
console.log(JSON.stringify(todo3));

