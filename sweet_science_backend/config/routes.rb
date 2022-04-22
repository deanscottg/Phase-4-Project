Rails.application.routes.draw do
  resources :workouts, only:[:index,:show,:create]
  resources :drills, only:[:index]
  resources :boxers
  patch"/boxer/:id", to: "boxers#update"
  get "/me", to: "boxers#show"
  post'/signup', to: "boxers#create"
  post'/login', to: "sessions#create"
  delete'/logout', to:"sessions#destroy"
  post'/workout', to:"workouts#create"
end
