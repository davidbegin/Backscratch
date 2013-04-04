TodoForm = Backbone.View.extend({
	templateName: 'todo_form',
		
	initialize: function(){
		this.all_todos = new TodosCollection();
		this.all_todos.on('add', this.addTodo, this);
	},
	
	addTodo: function(){
		console.log('So Something has been added')
		// I NEED TO MAKE THIS TRIGGER A RE RENDER OF THE TODOS
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
		console.log($('#todo_content').val());
		todo = this.all_todos.create({ content: $('#todo_content').val(), project_id: this.options.project_id });
		$('.icon_wrapper').show();
		$('#new_todo').hide();
	},

	render: function(){
		this.template = JST[this.templateName];
		this.$el.html(this.template())
		return this;
	}

});