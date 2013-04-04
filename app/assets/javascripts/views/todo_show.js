TodoShow = Backbone.View.extend({
	templateName: 'todos_show',
	className: 'single_todo',
	
	initialize: function(){
		console.log('TodoShow', this)
	},
	
	render: function(){
		this.template = JST[this.templateName];
		todo = this.model
		var html = this.template(todo)
		this.$el.html(html)
		return this;
	}
});