ProjectView = Backbone.View.extend({
	className: 'project_wrapper',
	templateName: 'project',
	
	initialize: function(){
	},
	
	render: function(){
		this.template = JST[this.templateName];
		project = this.model.toJSON();
		console.log(project)
		var html = this.template(project);
		this.$el.html(html);
		return this;
	},
});