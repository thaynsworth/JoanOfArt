Rails.application.routes.draw do

  root 'static_pages#home'

  post 'login' => 'sessions#create'

  resources :projects
  resources :sessions
  resources :users

end
