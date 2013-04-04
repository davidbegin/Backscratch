TodoIndex = Backbone.View.extend({
	templateName: 'todos_layout',
	
	initialize: function(options){
		this.all_projects = new ProjectCollection();
		this.all_projects.fetch();
		this.all_projects.on('reset', this.render, this);					
		vent = options.vent
		collection = this.collection
		project_id = options.project_id
		todos = options.todos
		todos.on('add', this.test, this)
		console.log('THIS IS A NEW TODOINDEX CHECK OUT THE PROJECT_ID')
		console.log(options.project_id)
	},
	
	
	test: function(){
		console.log("A new item has been added the all todos list in the todoindex");
		// Now I need to regenerate that list of todos
		var project_todos = todos.returnProjectTodos(project_id);
		$('.todo_wrapper').empty();
		_.each(project_todos, function(todo){
			view = new TodoShow({ model: todo, vent: vent });		
			$('.todo_wrapper').append(view.render().el)
		});
	},

	
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
		todo = todos.create({ content: $('#todo_content').val(), project_id: project_id });			
		$('.icon_wrapper').show();
		$('#new_todo').hide();
	},
	
	render: function(){
		// Find the project from the abbreviated collection
		// I NEED TO MOVE THIS INTO THE CREATION OF A NEW TODO
		
		// Set the todo_layout template
		this.template = JST[this.templateName];
		
		// create the projects url to fetch all projects with that id
		projects_url = '/projects/' + project_id;
		
		// set a project variable to assign to the product data
		var project;
		
		// use a non-aysnc call to grab the project from the server and assign the previous created project variable to the http responseText
		$.ajax({ url: projects_url, dataType: 'json', async: false,
		  success: function(data) {
				project = data;		
		  }
		});
		
		// set the el of the todos_index to the template with the data of the project name and id
		this.$el.html(this.template({ project_name: project.name, project_id: project.id }));
		
		//empty the todo_wrapper
		$('.todo_wrapper').empty();
		
		// go through each todo contained in the this.collection and the create a todo show with the model and vent object
		_.each(this.collection, function(todo){
			view = new TodoShow({ model: todo, vent: vent });
			
			//append that new todo to the todo_wrapper
			$('.todo_wrapper').append(view.render().el)
		});
		
		// return the what is rendered
		return this;
	}
});
