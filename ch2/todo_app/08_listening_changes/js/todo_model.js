var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    initialize: function(){
        console.log('This model Has been Initialized.');
        this.on('change', function(){
            console.log('- Values for this model has Changed');
        });
    }
});

var myTodo = new Todo();
myTodo.set("title","the listener is triggered whenever an attribute value changed ");
console.log('Title has changed: '+ myTodo.get("title"));

myTodo.set('completed',true);
console.log("Completed has changed: ", myTodo.get("completed"));

myTodo.set({
    title: 'Changing more than one attribute at the same time only triggers the listener once.',
    completed: true
});

