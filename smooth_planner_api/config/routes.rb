Rails.application.routes.draw do
  get 'items/index'

  get 'trips/index'

  get 'users/index'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :items
      resources :trips
    end
  end
end
