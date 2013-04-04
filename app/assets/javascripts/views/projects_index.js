ProjectsView = Backbone.View.extend({
	templateName: 'projects_header',
	className: '',
	
	initialize: function(options) {
		this.collection.on('sync', this.render, this);
		  _.bindAll(this, "newProject");
		  _.bindAll(this, "createProject");
		options.vent.bind("newProject", this.newProject);
		options.vent.bind("createProject", this.createProject);	
		vent = options.vent
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
		view = new ProjectView({ model: project, vent: vent });
		$('.section').append(view.render().el);
	}
});



























