ProjectsView = Backbone.View.extend({
	tagName: 'div',
	className: 'projects_wrapper',
	templateName: 'projects_index',
	
	initialize: function() {
		this.collection.on('all', this.render, this)
	},
	
	events: {
		'click .project_name': 'showProjectStats',
		'click .icon-file': 'newProject',
		'click .icon-undo': 'render',
		'click #new_project_button': 'createProject'
	},
	
	showProjectStats: function(){
		console.log('I was clicked!');
		console.log(this);
	},
	
	newProject: function(){
		console.log('So you want a new Project!');
		this.template = JST['project_form'];
		this.$el.html(this.template);
	},
	
	createProject: function(event){
		event.preventDefault();
		console.log('Want a new Form!');
		this.collection.create({
			name: $('#name_input').val(),
			client: $('#client_input').val(),
			description: $('#description_input').val()
		});
	},
	
	render: function(){
		this.template = JST[this.templateName];
		var html = this.template({ projects: this.collection.toJSON() })
		this.$el.html(html);
		return this;
	}
});