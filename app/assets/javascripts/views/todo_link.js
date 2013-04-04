TodoLink = Backbone.View.extend({
	templateName: 'new_todo_link',
	
	render: function(){
		this.template = JST[templateName];
		this.$el.html(this.template());
		return this;
	}
});