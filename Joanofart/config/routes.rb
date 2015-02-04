Rails.application.routes.draw do

  root 'static_pages#home'

  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'project' => 'projects#show'

  resources :projects
  resources :sessions
  resources :users

end
