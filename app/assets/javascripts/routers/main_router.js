var MainRouter = Backbone.Router.extend({
	
	routes: {
		'' : 'index'
	},
	
	index: function(){
		var vent = _.extend({}, Backbone.Events);
		projects = new ProjectCollection();
		projects.fetch();
		todos = new TodosCollection();
		todos.fetch();
		index_view = new ProjectsView({ collection: projects });
		$('.section').html(index_view.render().el);
	}
});