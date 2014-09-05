var Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

//setting the attributes via instantiation
var myTodo = new Todo({
    title: 'set trough Instantiation.'
});
console.log('Todo title: '+myTodo.get('title'));
// title: set trough Instantiation.
console.log('Todo completed: '+ myTodo.get('completed'));
//completed: false

//Set single attribute value at a time through Model.set()
myTodo.set("title","Title attribute set through Model.set()");
console.log('Todo title:' + myTodo.get('title'));
//title:Title attribute set through Model.set()
console.log('completed:' + myTodo.get("completed"));
//Completed: false

//Set map of attributes through Model.set()
myTodo.set({
    title: "Both attributes set through Model.set()",
    completed: true
})

console.log('Todo Title:' + myTodo.get("title"));
//title: Both attributes set through Model.set()
console.log('completed:' + myTodo.get("completed"));
//completed: true