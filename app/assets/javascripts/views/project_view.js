ProjectView = Backbone.View.extend({
	templateName: 'project',
	
	events: {
		'click .project_name': 'showTodos'
	},
	
	showTodos: function(){
		todo_selector = ".project_" + this.model.get('id');
		$('.todos div').hide();
		$(todo_selector).show();
	},
	
	render: function(){
		this.template = JST[this.templateName];
		project = this.model.toJSON();
		var html = this.template(project);
		this.$el.html(html);
		return this;
	},
});