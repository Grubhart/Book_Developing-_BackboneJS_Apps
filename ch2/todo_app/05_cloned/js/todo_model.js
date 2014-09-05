var Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

var todo1 = new Todo();
var todo_cloned1Attributes = todo1.toJSON();
//following logs: {"title":"", "completed":false}
console.log(todo_cloned1Attributes);

var todo2 = new Todo({
    title:"Try this example and check result in console.",
    completed:true
});

console.log(todo2.toJSON());
