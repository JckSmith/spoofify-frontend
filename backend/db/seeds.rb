puts "🌱 Seeding spices..."

Artist.create(artist_name: "Coldplay", genre: "Alternative")
Artist.create(artist_name: "Pink Floyd", genre: "Rock")
Artist.create(artist_name: "Metallica", genre: "Metal")

art = Artist.all

Song.create(artist: art[0], song_name: "Viva La Vida", length: "4:03")
Song.create(artist: art[0], song_name: "Paradise", length: "4:39")
Song.create(artist: art[0], song_name: "Clocks", length: "5:08")
Song.create(artist: art[1], song_name: "Mother", length: "5:35")
Song.create(artist: art[1], song_name: "In the Flesh?", length: "3:20")
Song.create(artist: art[1], song_name: "The Thin ice", length: "2:30")
Song.create(artist: art[2], song_name: "One", length: "7:28")
Song.create(artist: art[2], song_name: "Battery", length: "5:12")
Song.create(artist: art[2], song_name: "Master of Puppets", length: "8:36")



puts "✅ Done seeding!"
