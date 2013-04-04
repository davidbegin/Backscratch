TodoShow = Backbone.View.extend({
	templateName: 'todos_show',
	className: 'single_todo',
	
	render: function(){
		this.template = JST[this.templateName];
		todo = this.model
		var html = this.template(todo)
		this.$el.html(html)
		return this;
	}
});