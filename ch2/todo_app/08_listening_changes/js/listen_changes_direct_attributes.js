var Todo = Backbone.Model.extend({
    //Default attributes
    defaults:{
        title: '',
        completed: false
    },
    initialize: function () {
       console.log(' Todo Object has been initialized');
       this.on('change:title', function(){
           console.log('title has changed');
       });
    },
    setTitle: function(newTitle){
        this.set({title: newTitle});
    }
});

var myTodo = new Todo();
//Both of the following changes trigger the listener
myTodo.set('title','check this on the log');
myTodo.setTitle('go fishing on sunday');

// but this change is not observed, so no listener is triggered
myTodo.set('completed',true);
console.log('my todo set is completed: completed ' , myTodo.get('completed'));

