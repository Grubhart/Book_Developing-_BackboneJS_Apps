var TodoView = Backbone.View.extend({

    tagName: 'li',

    //Cache the function template for a Single item
    todoTpl: _.template("An Example Template"),

    events: {
        'dblclick label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'blur .edit' : 'close'
    },

    //Rerender the titles of the Item
    render: function(){
        this.$el.html( this.todoTpl(this.model.toJSON()) );
        this.input=this.$('.edit');
        return this;
    },

    edit : function(){
        //executed when item label is double clicked
    },

    close : function(){
        //executed when item lose focus
    },

    updateOnEnter : function(){
        //executed on each keypress when in item edit mode,
        //but we'll wait for enter to get in action
    }
});

var todoView = new TodoView();

//log reference to a DOM element that corresponds to the view Instance
console.log(todoView.el); // logs <li></li>
