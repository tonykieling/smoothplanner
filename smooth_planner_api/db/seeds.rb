require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# CREATE USER
user1 = User.create({
  name: "Bob Collins",
  email: "bob@user.com",
})

user2 = User.create({
  name: "Suzy Halpert",
  email: "suzy@user.com",
})

user3 = User.create({
  name: "Darlan Princivale",
  email: "darlan@user.com",
  suggestions: true
})

user4 = User.create({
  name: "Neila Corad",
  email: "neila@user.com",
})



# CREATE ITINERARIES
Trip.create(
{
  name: "Christmas trip",
  time_start:'December 24, 2019',
  time_end:'January 3, 2020',
  user_id: 2
})

Trip.create(
{
  name: "Summer holidays in Europe",
  time_start:'July 1, 2019',
  time_end:'July 15, 2019',
  user_id: 1
})

Trip.create(
{
  name: "Valentine day in Paris",
  user_id: 3
})

Trip.create(
  {
    name: "Going to Zurich",
    time_start:'September 1, 2019',
    time_end:'September 15, 2019',
    user_id: 4
  })

Trip.create(
  {
    name: "Japan Trip 2020",
    time_start:'July 1, 2020',
    time_end:'July 15, 2020',
    user_id: 1
  })



# CREATE TRIPS ITEMS
# first items trip
Item.create({
  time_start: 'December 24, 2019 08:20:00',
  time_end: 'December 25, 2020 06:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Cancun',
  venue: 'YVR Airport',
  confirmation: 'ABC4YQ',
  trip_id: 1
})

Item.create({
  time_start: 'December 25, 2019 08:20:00',
  time_end: 'January 3, 2020 10:30:00',
  item_type: 'A',
  venue: 'Mariott Cancun Resort',
  details: 'booking pending',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 1
})

Item.create({
  time_start: 'December 27, 2019 08:20:00',
  item_type: 'E',
  title: 'Day trip to Chechen Itza',
  details: 'Rent a car from hotel. Drive should take 2 hours',
  trip_id: 1
})

Item.create({
  time_start: 'December 31, 2019 20:00:00',
  time_end: 'January 1, 2020 01:00:00',
  item_type: 'E',
  title: 'New year party',
  details: 'www.partyatcancun2019.com',
  trip_id: 1
})

Item.create({
  time_start: 'January 2, 2020 11:30:00',
  item_type: 'E',
  title: 'Brunch',
  details: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 1
})

Item.create({
  time_start: 'January 2, 2020 06:00:00',
  time_end: 'December 2, 2020 16:30:00',
  item_type: 'T',
  city_depart: 'Cancun',
  city_arrival: 'Vancouver',
  confirmation: 'TBC4YQ',
  venue: 'Cancun International Airport',
  trip_id: 1
})


# second items trip
Item.create({
  time_start: 'July 1, 2019 06:20:00',
  time_end: 'July 1, 2020 11:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Basel',
  confirmation: 'ABC4YQ',
  trip_id: 2
})

Item.create({
  time_start: 'July 1, 2019 14:30:00',
  time_end:'July 5, 2019 10:30:00',
  item_type: 'A',
  venue: 'Basel Sheraton',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 2
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'A',
  venue: 'Geneva Marriot',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 2
})

Item.create({
  time_start: 'July 10, 2019 14:30:00',
  item_type: 'E',
  title: 'Go to Jungfrau',
  trip_id: 2
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'T',
  city_depart: 'Basel',
  city_arrival: 'Geneva',
  title: 'Avis car rental',
  details: 'pick up at airport',
  trip_id: 2
})

# third items trip
# the user has just started thinking the trip
Item.create({
  time_start: 'September 1, 2019 10:20:00',
  time_end: 'September 2, 2020 07:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Zurich',
  trip_id: 3
})