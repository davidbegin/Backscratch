ProjectView = Backbone.View.extend({
	templateName: 'project',
	
	initialize: function(options){
		this.todos = new TodosCollection();
		this.todos.fetch();
		this.todos.on('sync', this.render, this);
		_.bindAll(this, "addTodo");
		options.vent.bind("addTodo", this.addTodo);
		_.bindAll(this, "showTodos");
		options.vent.bind("showTodos", this.showTodos);
		vent  = options.vent
		all_todos = this.todos
	},
	
	
	addTodo: function(){
		project_id = 29;
		var project_todos = this.todos.returnProjectTodos(project_id);
		todo_index = new TodoIndex({ collection: project_todos, vent: vent });
		$('.sidebar').html(todo_index.render().el);
	},
	
	events: {
		'click .project_name': 'showTodos'
	},

	showTodos: function(){		
		project_id = this.model.get('id');
		var project_todos = this.todos.returnProjectTodos(project_id);		

		// if(project_todos.length > 0){
		// 	todo_index = new TodoIndex({ collection: project_todos, vent: vent, todos: todos, project_id: project_id });
		// 	$('.sidebar').html(todo_index.render().el);
		// } else {
		// 	console.log('There are no todos for this porject')
		// }
		
			todo_index = new TodoIndex({ collection: project_todos, vent: vent, todos: todos, project_id: project_id });
			$('.sidebar').html(todo_index.render().el);
		
		

	},
	
	render: function(){
		this.template = JST[this.templateName];
		project = this.model.toJSON();
		var html = this.template(project);
		this.$el.html(html);
		return this;
	},
});