ProjectsView = Backbone.View.extend({
	templateName: 'projects_header',
	className: '',
	
	initialize: function(options) {
		this.collection.on('sync', this.render, this);
		this.collection.on('destroy', this.destroyProjects, this)
		collection = this.collection
	},
	
	events: {
		'click .icon-file': 'newProject',
		'click .icon-undo': 'render',
		'click #new_project_button': 'createProject'
	},
	
	newProject: function(){
		this.template = JST['project_form'];
		this.$el.html(this.template);
		$('.project').css('display', 'none');
	},
	
	destroyProjects: function(){
		$('.project').remove()
		this.render();
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
		view = new ProjectView({ model: project, collection: collection });
		$('.section').append(view.render().el);
	}
});



























