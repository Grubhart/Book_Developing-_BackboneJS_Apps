

var Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

var todo1 = new Todo();
todo_cloned1Attributes = todo1.toJSON();
//following logs: {"title":"", "completed":false}
console.log(todo_cloned1Attributes);

