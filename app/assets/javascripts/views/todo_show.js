TodoShow = Backbone.View.extend({
	templateName: 'todos_show',
	className: 'single_todo',
	
	events: {
		'click .icon-trash': 'deleteTodo',
		'dblclick .todos': 'editTodo',
		'keypress #edit_todo': 'updateUponEnter',
		'blur #edit_todo': 'close'
	},
	
	deleteTodo: function(){
		this.model.destroy();
	},
	
	editTodo: function(){
		console.log('LET EDIT THIS BITCH');
		this.$("#non_edit").hide();
		this.$("#edit_todo").show();
	},
	
	updateUponEnter: function(e){
		if(e.which === ENTER_KEY) {
			this.close()
		}
	},
	
	close: function(){		
		var value = this.$input.val().trim();
		if(value) {
			this.model.save({ content: value });
		}
		this.$("#non_edit").show();
		this.$("#edit_todo").hide();
	},
	
	saveTodo: function(){
		todo_content = $('.todo_edit_content').val();
		console.log(todo_content);
	},
	
	render: function(){
		this.template = JST[this.templateName];
		var html = this.template(this.model.toJSON())
		this.$el.html(html);
		this.$input = this.$('#edit_todo');
		this.$("#edit_todo").hide();
		return this;
	}
});