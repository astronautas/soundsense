# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do |i|
  Track.create({ 
    name: 'Sample Track #{i}', 
    url: 'https://soundcloud.com/travisscott-2/wonderful-ftthe-weeknd'
  })
end