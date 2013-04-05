TodoIndex = Backbone.View.extend({
	templateName: 'todos_layout',
	
	initialize: function(options){
		this.all_projects = new ProjectCollection();
		this.all_projects.fetch();
		this.all_projects.on('reset', this.render, this);					
		todos = options.todos
		this.collection.on('add', this.render, this);
		this.collection.on('destroy', this.render, this)
		collection = this.collection
		project_id = options.project_id
		console.log(this.collection)
	},
	
	// reRender: function(){
	// 	var project_todos_array = todos.returnProjectTodos(project_id);
	// 	var project_todos = new TodosCollection(project_todos_array)	
	// 	$('.todo_wrapper').empty();
	// 	this.collection.each(this.appendTodo)
	// },

	events: {
		'click .icon-plus': 'revealForm',
		'click #new_todo_button': 'newTodo'
	},
	
	revealForm: function(){
		$('.icon_wrapper').hide();
		$('#new_todo').show();
	},
	
	newTodo: function(event){
		event.preventDefault();
		temp_todo = this.collection.create({ content: $('#todo_content').val(), project_id: project_id });	
		console.log(temp_todo)				
				
		$('.icon_wrapper').show();
		$('#new_todo').hide();
	},
	
	appendTodo: function(todo){
			view = new TodoShow({ model: todo });			
			$('.todo_wrapper').append(view.render().el)
	},
	
	render: function(){
		this.template = JST[this.templateName];		
		projects_url = '/projects/' + project_id;		
		var project;		
		$.ajax({ url: projects_url, dataType: 'json', async: false,
		  success: function(data) {
				project = data;		
		  }
		});		
		this.$el.html(this.template({ project_name: project.name, project_id: project.id }));		
		$('.todo_wrapper').empty();		
		
		
		
		this.collection.each(this.appendTodo)
		
		// I MIGHT NOT NEED THIS AND NOT CAN JUST USE .EACH
		// _.each(this.collection, function(todo){
		// 	console.log(".each todoindex loop")
		// 	console.log(todo)
		// 	view = new TodoShow({ model: todo });			
		// 	$('.todo_wrapper').append(view.render().el)
		// });
		return this;
	}
});
