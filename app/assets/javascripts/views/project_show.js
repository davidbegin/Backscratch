ProjectView = Backbone.View.extend({
	templateName: 'project',
	
	initialize: function(){
		this.todos = new TodosCollection();
		this.todos.fetch();
		this.todos.on('reset', this.render, this);
	},
	
	events: {
		'click .project_name': 'showTodos'
	},
	
	showTodos: function(){
		project_id = this.model.get('id');
		var project_todos = this.todos.returnProjectTodos(project_id);
		todo_index = new TodoIndex({ collection: project_todos });
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