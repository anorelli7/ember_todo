Todos.TodosController = Ember.ArrayController.extend({

	actions: {
		createTodo: function() {
			// Get the todo title set by the "New todo" text field
			var title = this.get('newTitle');
			if (!title.trim()) {return;}

			//Create new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false

			});

			// Clear the "new Todo" text field
			this.set('newTitle', '');

			// Save the New Model
			todo.save();
		}
	},

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');

	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});