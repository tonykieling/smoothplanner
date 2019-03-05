Rails.application.routes.draw do
  get 'items/index'

  get 'itineraries/index'

  get 'users/index'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :items
      resources :itineraries
    end
  end
end
