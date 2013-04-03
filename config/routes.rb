Pomodoro::Application.routes.draw do
  get "main/home"
  get "main/admin"
  root :to => 'main#home'
end
