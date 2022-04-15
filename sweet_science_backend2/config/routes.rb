Rails.application.routes.draw do
  resources :workouts, only:[:index,:show,:create]
  resources :drills, only:[:index]
  resources :boxers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
