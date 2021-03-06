Rails.application.routes.draw do

  root 'static_pages#home'

  get 'about' => 'static_pages#about'
  get 'contact' => 'static_pages#contact'

  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'project' => 'projects#show'
  post 'project' => 'projects#edit'
  patch 'project' => 'projects#update'

  resources :projects
  resources :sessions
  resources :users
  resources :static_pages

end
