window.Pomodoro =
	Models: {}
	Collections: {}
	iews: {}
	Routers: {}
	initialize: ->
		new MainRouter()
		Backbone.history.start()

$(document).ready ->
	Pomodoro.initialize()
