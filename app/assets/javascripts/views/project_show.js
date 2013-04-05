ProjectView = Backbone.View.extend({
	templateName: 'project',
	
	initialize: function(options){
		this.todos = new TodosCollection();
		this.todos.fetch();
		this.todos.on('sync', this.render, this);
		all_todos = this.todos
		console.log(this.model)
	},
		
	addTodo: function(){
		project_id = 29;
		var project_todos_array = this.todos.returnProjectTodos(project_id);	
		var project_todos = new TodosCollection(project_todos_array)	
		todo_index = new TodoIndex({ collection: project_todos });
		$('.sidebar').html(todo_index.render().el);
	},
	
	events: {
		'click .project_name': 'showTodos'
	},

	showTodos: function(){		
		project_id = this.model.get('id');
		var project_todos_array = this.todos.returnProjectTodos(project_id);		
		// HERE I NEED TO CREATE A NEW COLLECITON ONLY CONTAIN THOSE VALUE
		var project_todos = new TodosCollection(project_todos_array)
		
		todo_index = new TodoIndex({ collection: project_todos, todos: todos, project_id: project_id });
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