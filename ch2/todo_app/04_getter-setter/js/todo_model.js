var Todo = Backbone.Model.extend({
   //Default attributes
    defaults: {
        title: '',
        completed: false
    }
});

var todo1 = new Todo();
console.log(todo1.get('title'));// empty string
console.log(todo1.get('completed'));// false

var todo2 = new Todo({
    title: "Retrieved with model's get method.",
    completed: true
});
console.log(todo2.get('title'));//Retrieved with model's get method.
console.log(todo2.get('completed'));//true

var Todo_cloned = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

var todo_cloned1 = new Todo();
todo_cloned1Attributes = todo_cloned1.toJSON();
//following logs: {"title":"", "completed":false}
console.log(todo_cloned1Attributes);

