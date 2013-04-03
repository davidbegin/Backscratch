TodosIndex = Backbone.View.extend({
	templateName: 'todos',
	
	initialize: function(){
		this.collection.on('all', this.render, this)
	},
	
	render: function(){
		this.template = JST[this.templateName];
		todos = this.collection.toJSON();
		this.$el.html(this.template({ todos: todos }));
		return this;
	}
});