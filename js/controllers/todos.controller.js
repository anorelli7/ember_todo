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
	}
});