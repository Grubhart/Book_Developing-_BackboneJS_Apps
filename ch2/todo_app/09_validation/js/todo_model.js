var Person = new Backbone.Model({name:"Jeremy"});

//Validate the model name
Person.validate = function(attrs){
    if(!attrs.name){
        return "I need your name";
    }
};

//Change the name
Person.set({name:"Samuel"});
console.log(Person.get('name'));
//Samuel

//Remove the name attribute force validation
Person.unset('name',{validate: true});
//false
