require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
  name: "Bob Collins",
  email: "bob@user.com",
})

user2 = User.create({
  name: "Suzy Halpert",
  email: "suzy@user.com",
})

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
  time_end:'July 15, 2020',
  user_id: 1
})

Trip.create(
{
  id: 't03',
  name: "Valentine day in Paris",
  user_id: 1
})

Item.create({
  time_start: 'December 24, 2019 08:20:00',
  time_end: 'January 3, 2020 10:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Cancun',
  confirmation: 'ABC4YQ',
  trip_id: 0
})

Item.create({
  time_start: 'December 24, 2019 08:20:00',
  time_end: 'January 3, 2020 10:30:00',
  item_type: 'A',
  venue: 'Mariott Cancun Resort',
  details: 'booking pending',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 0
})

Item.create({
  time_start: 'December 27, 2019 08:20:00',
  item_type: 'E',
  title: 'Day trip to Chechen Itza',
  details: 'Rent a car from hotel. Drive should take 2 hours',
  trip_id: 0
})

Item.create({
  time_start: 'December 31, 2019 20:00:00',
  time_end: 'January 1, 2020 01:00:00',
  item_type: 'E',
  title: 'New year party',
  details: 'www.partyatcancun2019.com',
  trip_id: 0
})

Item.create({
  time_start: 'January 2, 2020 11:30:00',
  item_type: 'E',
  title: 'Brunch',
  details: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 0
})

Item.create({
  time_start: 'July 1, 2019 06:20:00',
  time_end: 'July 15, 2020 20:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Basel',
  confirmation: 'ABC4YQ',
  trip_id: 1
})

Item.create({
  time_start: 'July 1, 2019 14:30:00',
  time_end:'July 5, 2019 10:30:00',
  item_type: 'A',
  venue: 'Basel Sheraton',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 1
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'A',
  venue: 'Geneva Marriot',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: 1
})

Item.create({
  time_start: 'July 10, 2019 14:30:00',
  item_type: 'E',
  title: 'Go to Jungfrau',
  trip_id: 1
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'T',
  city_depart: 'Geneva',
  city_arrival: 'Geneva',
  title: 'Avis car rental',
  details: 'pick up at airport',
  trip_id: 1
})
