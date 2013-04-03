ProjectsView = Backbone.View.extend({
	tagName: 'div',
	className: 'projects_wrapper',
	templateName: 'projects_index',
	
	initialize: function() {
		this.collection.on('all', this.render, this)
	},
	
	events: {
		'click .project_name': 'showProjectStats'
	},
	
	showProjectStats: function(){
		console.log('I was clicked!');
		
	},
	
	render: function(){
		this.template = JST[this.templateName];
		var html = this.template({ projects: this.collection.toJSON() })
		this.$el.html(html);
		return this;
	}
});