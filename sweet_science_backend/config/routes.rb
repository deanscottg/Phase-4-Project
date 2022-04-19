Rails.application.routes.draw do
  resources :workouts, only:[:index,:show]
  resources :drills, only:[:index]
  resources :boxers
  post'/signup', to: "boxers#create"
  post'/login', to: "sessions#create"
  delete'/logout', to:"sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
