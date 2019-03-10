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
  email: "bob@user.com"
})

user2 = User.create({
  name: "Suzy Halpert",
  email: "suzy@user.com"
})

user3 = User.create({
  name: "Darlan Princivale",
  email: "darlan@user.com",
  suggestions: true
})

user4 = User.create({
  name: "Neila Corad",
  email: "neila@user.com"
})

user5 = User.create({
  name: "Simone K",
  email: "simone@user.com"
})



# CREATE TRIPS
trip1 = Trip.create(
{
  name: "Christmas trip",
  time_start:'December 24, 2019',
  time_end:'January 3, 2020'
})
trip1.users << user1


trip2 = Trip.create(
{
  name: "Summer holidays in Europe",
  time_start:'July 1, 2019',
  time_end:'July 15, 2019'
})
trip2.users << user2
trip2.users << user1


trip3 = Trip.create(
{
  name: "Valentine day in Paris"
})
trip3.users << user2
trip3.users << user1


trip4 = Trip.create(
  {
    name: "Going to Zurich",
    time_start:'September 1, 2019',
    time_end:'September 15, 2019'
  }
)
trip4.users << user2


trip5 = Trip.create(
{
  name: "Japan Trip 2020",
  time_start:'July 1, 2020',
  time_end:'July 15, 2020'
})
trip5.users << user1


trip6 = Trip.create(
  {
    name: "Businnes meeting at Toronto",
    time_start:'April 1, 2019',
    time_end:'July 4, 2019'
  }
)
trip6.users << user2


trip7 = Trip.create(
  {
    name: "Businnes meeting at Calgary",
    time_start:'August 5, 2019',
    time_end:'August 9, 2019'
  }
)
trip7.users << user1


trip8 = Trip.create(
  {
    name: "Go Shopping",
    time_start:'March 22, 2019',
    time_end:'March 24, 2019'
  }
)
trip8.users << user1


trip9 = Trip.create(
  {
    name: "Hawaii Time",
    time_start:'March 2, 2017',
    time_end:'March 20, 2017'
  }
)
trip9.users << user2
trip9.users << user1



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
  trip_id: trip1.id
})

Item.create({
  time_start: 'December 25, 2019 08:20:00',
  time_end: 'January 3, 2020 10:30:00',
  item_type: 'A',
  venue: 'Mariott Cancun Resort',
  details: 'booking pending',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: trip1.id
})

Item.create({
  time_start: 'December 27, 2019 08:20:00',
  item_type: 'E',
  title: 'Day trip to Chechen Itza',
  details: 'Rent a car from hotel. Drive should take 2 hours',
  trip_id: trip1.id
})

Item.create({
  time_start: 'December 31, 2019 20:00:00',
  time_end: 'January 1, 2020 01:00:00',
  item_type: 'E',
  title: 'New year party',
  details: 'www.partyatcancun2019.com',
  trip_id: trip1.id
})

Item.create({
  time_start: 'January 2, 2020 6:30:00',
  item_type: 'E',
  title: 'Brunch',
  details: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: trip1.id
})

Item.create({
  time_start: 'January 2, 2020 10:00:00',
  time_end: 'December 2, 2020 16:30:00',
  item_type: 'T',
  city_depart: 'Cancun',
  city_arrival: 'Vancouver',
  confirmation: 'TBC4YQ',
  venue: 'Cancun International Airport',
  trip_id: trip1.id
})



# second items trip
Item.create({
  time_start: 'July 1, 2019 06:20:00',
  time_end: 'July 1, 2020 11:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Basel',
  confirmation: 'ABC4YQ',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 1, 2019 14:30:00',
  time_end:'July 5, 2019 10:30:00',
  item_type: 'A',
  venue: 'Basel Sheraton',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'A',
  venue: 'Geneva Marriot',
  address: 'Boulevard Kukulcan Retorno Chac, Zona Hotelera, 77500 Cancún, Q.R., Mexico',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 10, 2019 14:30:00',
  item_type: 'E',
  title: 'Go to Jungfrau',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'T',
  city_depart: 'Basel',
  city_arrival: 'Geneva',
  title: 'Avis car rental',
  details: 'pick up at airport',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 5, 2019 14:30:00',
  time_end:'July 15, 2019 10:30:00',
  item_type: 'E',
  venue: 'any place with beach and sun',
  title: 'Beach time!!!',
  details: 'take some sun',
  trip_id: trip2.id
})

Item.create({
  time_start: 'July 15, 2019 08:20:00',
  time_end: 'July 15, 2020 17:30:00',
  item_type: 'T',
  city_depart: 'Geneva',
  city_arrival: 'Vancouver',
  confirmation: 'A3C4YQ',
  trip_id: trip2.id
})



# third items trip
# the user has just started thinking the trip
Item.create({
  time_start: 'September 1, 2019 10:20:00',
  time_end: 'September 2, 2020 07:30:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Zurich',
  trip_id: trip3.id
})



# forth items trip
Item.create({
  time_start: 'March 22, 2019 7:30:00',
  time_end: 'March 24, 2020 01:00:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Seattle',
  details: 'we need to purchase clothes and visit uncle Paul. Going by car.',
  trip_id: trip6.id
})

Item.create({
  time_start: 'March 24, 2019 01:00:00',
  time_end: 'March 24, 2020 03:30:00',
  item_type: 'T',
  city_depart: 'Seattle',
  city_arrival: 'Vancouver',
  details: 'we need to go back sharp 01:00!',
  trip_id: trip6.id
})

Item.create({
  time_start: 'March 22, 2019 10:30:00',
  title: 'Go Walmart',
  item_type: 'E',
  city_depart: 'Vancouver',
  city_arrival: 'Seattle',
  trip_id: trip6.id
})

Item.create({
  time_start: 'March 23, 2019 11:30:00',
  item_type: 'E',

  venue: 'Yammy Food Restaurant',
  trip_id: trip6.id
})

Item.create({
  time_start: 'March 23, 2019 06:30:00',
  item_type: 'E',
  venue: 'Tropical Best Food',
  details: 'uncle Paul and family and us',
  trip_id: trip6.id
})

Item.create({
  time_start: 'March 22, 2019 10:00:00',
  time_end: 'March 24, 2020 10:30:00',
  item_type: 'A',
  venue: 'Hotel Star',
  trip_id: trip6.id
})


Item.create({
  time_start: 'March 23, 2019 11:30:00',
  time_end: 'March 23, 2019 20:30:00',
  item_type: 'E',
  venue: "Cloth's Super Store'",
  details: "let's check this new store with uncle Paul. Whole day activity and dinner at the end.",
  trip_id: trip6.id
})



# fiveth items trip
Item.create({
  time_start: 'March 2, 2017 7:30:00',
  time_end: 'March 2, 2017 01:00:00',
  item_type: 'T',
  city_depart: 'Vancouver',
  city_arrival: 'Hawaii',
  details: 'it will be a great time',
  trip_id: trip7.id
})

Item.create({
  time_start: 'March 20, 2017 1:00:00',
  time_end: 'March 20, 2027 03:30:00',
  item_type: 'T',
  city_depart: 'Hawaii',
  city_arrival: 'Vancouver',
  details: 'going back home',
  trip_id: trip7.id
})

Item.create({
  time_start: 'March 2, 2017 18:30:00',
  title: 'Meet Alice',
  item_type: 'E',
  details: 'dinner somewhere',
  trip_id: trip7.id
})

Item.create({
  time_start: 'March 3, 2017 11:30:00',
  item_type: 'E',
  venue: 'Food Restaurant',
  trip_id: trip7.id
})

Item.create({
  time_start: 'March 5, 2017 06:30:00',
  item_type: 'E',
  venue: 'Tropical Restaurant',
  details: 'coconot, please',
  trip_id: trip7.id
})

Item.create({
  time_start: 'March 2, 2017 10:00:00',
  time_end: 'March 20, 2027 10:30:00',
  item_type: 'A',
  venue: 'Hawaii Hotels',
  trip_id: trip7.id
})