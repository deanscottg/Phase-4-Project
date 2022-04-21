Rails.application.routes.draw do
  resources :workouts, only:[:index,:show]
  resources :drills, only:[:index]
  resources :boxers
  post'/signup', to: "boxers#create"
  post'/login', to: "sessions#create"
  delete'/logout', to:"sessions#destroy"
end
