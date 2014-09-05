var Person = new  Backbone.Model();
Person.set({name :"Jeremy"},{silent:true});
console.log(!Person.hasChanged(0));
//true
console.log(!Person.hasChanged(''));
//true