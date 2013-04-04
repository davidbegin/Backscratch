TodosCollection = Backbone.Collection.extend({
	url: '/todos',
	
	returnProjectTodos: function(id){		
		var project_todos = _.filter(this.toJSON(), function(model){
			return model.project_id === id;
		});
		return project_todos;
	}
	
});