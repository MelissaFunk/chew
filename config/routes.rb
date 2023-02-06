Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  resources :recipes, only: [:index, :create, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
end