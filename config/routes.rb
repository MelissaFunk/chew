Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  resources :recipes, only: [:index, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end