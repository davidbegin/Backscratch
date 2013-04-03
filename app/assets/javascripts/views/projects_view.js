ProjectsView = Backbone.View.extend({
	tagName: 'div',
	className: 'projects_wrapper',
	templateName: 'projects_header',
	
	initialize: function() {
		this.collection.on('sync', this.render, this)
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
		$('.project').empty();
		this.template = JST['project_form'];
		this.$el.html(this.template);
	},
	
	createProject: function(event){
		event.preventDefault();
		this.collection.create({
			name: $('#name_input').val(),
			client: $('#client_input').val(),
			description: $('#description_input').val()
		});
	},
	
	render: function(){
		this.template = JST[this.templateName];
		this.$el.html(this.template());
    this.collection.each(this.appendProject)
    return this;
	},
	
	appendProject: function(project) {
		view = new ProjectView({ model: project });
		$('.section').append(view.render().el);
	}
});



























