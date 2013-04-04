TodoIndex = Backbone.View.extend({
	templateName: 'todos_layout',
	
	initialize: function(){
		this.all_projects = new ProjectCollection();
		this.all_projects.fetch();
		this.all_projects.on('reset', this.render, this);
	},
	
	render: function(){		
	project_id = this.collection[0].project_id;
		this.template = JST[this.templateName];
		projects_url = '/projects/' + project_id;
		var project;
		$.ajax({ url: projects_url, dataType: 'json', async: false,
		  success: function(data) {
				project = data;		
		  }
		});
		this.$el.html(this.template({ project_name: project.name, project_id: project.id }));
		
		$('.todo_wrapper').empty();
		_.each(this.collection, function(todo){
			view = new TodoShow({ model: todo });
			$('.todo_wrapper').append(view.render().el)
		});

		
		return this;
	}
});
