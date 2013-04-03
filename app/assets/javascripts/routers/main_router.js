var MainRouter = Backbone.Router.extend({
	
	routes: {
		'' : 'index'
	},
	
	initialize: function(){
	},
	
	index: function(){
		projects = new ProjectCollection();
		projects.fetch();
		view = new ProjectsView({ collection: projects });
		$('.section').html(view.render().el);
	}
});