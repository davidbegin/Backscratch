TodoShow = Backbone.View.extend({
	templateName: 'todos_show',
	className: 'single_todo',
	
	events: {
		'click .icon-trash': 'deleteTodo'
	},
	
	deleteTodo: function(){
		this.model.destroy();
	},
	
	render: function(){
		this.template = JST[this.templateName];
		console.log(this.model)
		console.log(this.model.toJSON())
		var html = this.template(this.model.toJSON())
		this.$el.html(html)
		return this;
	}
});