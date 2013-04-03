var MainRouter = Backbone.Router.extend({
	
	routes: {
		'' : 'index'
	},
	
	initialize: function(){
	},
	
	index: function(){
		projects = new ProjectCollection();
		projects.fetch();
		index_view = new ProjectsView({ collection: projects });
		$('.section').html(index_view.render().el);
	}
});