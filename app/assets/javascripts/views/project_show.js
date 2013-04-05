ProjectView = Backbone.View.extend({
	templateName: 'project',
	
	initialize: function(options){
		console.log("THIS.COLLECTION", this.collection)
		this.todos = new TodosCollection();
		this.todos.fetch();
		this.todos.on('sync', this.render, this);
		all_todos = this.todos
	},
		
	addTodo: function(){
		project_id = 29;
		var project_todos_array = this.todos.returnProjectTodos(project_id);	
		var project_todos = new TodosCollection(project_todos_array)	
		todo_index = new TodoIndex({ collection: project_todos });
		$('.sidebar').html(todo_index.render().el);
	},
	
	events: {
		'click .project_name': 'showTodos',
		'click .delete': 'deleteProject'
	},

	deleteProject: function(){
		this.model.destroy();
	},

	showTodos: function(){		
		project_id = this.model.get('id');
		var project_todos_array = this.todos.returnProjectTodos(project_id);		
		var project_todos = new TodosCollection(project_todos_array)
		todo_index = new TodoIndex({ collection: project_todos, todos: todos, project_id: project_id });
		$('.sidebar').html(todo_index.render().el);
		// this.addDelete();
	},
	
	render: function(){
		this.template = JST[this.templateName];
		project = this.model.toJSON();
		var html = this.template(project);
		this.$el.html(html);
		return this;
	},
	
	// addDelete: function(){
	// 	this.template = JST['project_delete']
	// 	project = this.model.toJSON();
	// 	var html = this.template(project);
	// 	console.log(html);
	// 	$('#delete_project').append(html)
	// }
	
});