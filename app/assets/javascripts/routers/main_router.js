var MainRouter = Backbone.Router.extend({
	
	routes: {
		'' : 'index'
	},
	
	initialize: function(){
	},
	
	index: function(){
		var vent = _.extend({}, Backbone.Events);
		

		
		
		projects = new ProjectCollection();
		projects.fetch();
		todos = new TodosCollection();
		todos.fetch();
		// I PASSED THE VENT OBJECT INTO THE INDEX VIEW
		index_view = new ProjectsView({ collection: projects, vent: vent });
		$('.section').html(index_view.render().el);
	}
});