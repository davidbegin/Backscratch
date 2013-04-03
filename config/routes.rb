Pomodoro::Application.routes.draw do
  resources :projects


  get "main/home"
  get "main/admin"
  root :to => 'main#home'
end
