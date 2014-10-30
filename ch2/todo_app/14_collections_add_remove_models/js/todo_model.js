var Todo = Backbone.Model.extend({
    defaults: {
        title : '',
        completed : false
    }

});

var TodoCollection = Backbone.Collection.extend({
    model: Todo
});

var a = new Todo({title: 'Go to Jamaica'});
var b = new Todo({title: 'Go to China'});
var c = new Todo({title: 'Go to Disneyland'});

var todos = new TodoCollection([a,b]);
console.log("Collections size: "+ todos.length);
//logs: Collection size : 2

todos.add(c);
console.log("Collections size: "+ todos.length);
//logs: Collection size : 3

todos.remove([a,b]);
console.log("Collections size: "+ todos.length);
//logs: Collection size : 1

todos.remove(c);
console.log("Collections size: "+ todos.length);
//logs: Collection size : 0


