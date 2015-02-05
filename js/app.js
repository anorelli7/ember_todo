window.Todos = Ember.Application.create();

//Application Adapter is an extension of the DS.FixtureAdapter
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

//Routes
Todos.Router.map(function() {
  // put your routes here
  this.resource('todos', {path: '/'});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

//Creates Todo Model, includes 2 attr:  title, isCompleted
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

//Fixture Data
Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];