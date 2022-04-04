
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/" do
    'Home'
  end
  get "/artists" do
    artists= Artist.all
    artists.to_json
  end

  get "/songs" do
    songs = Song.all
    songs.to_json
  end

  get "/artists/:id/songs" do 
    songs= Artist.find(params[:id]).songs
    songs.to_json
  end

  post "/songs" do
    new_song= Song.create(
      song_name: params[:song_name],
      length: params[:length],
      artist_id: params[:artist_id]
    )
    new_song.to_json
  end

  delete "/songs/:id" do
    old_song = Song.find(params[:id])
    old_song.destroy
    old_song.to_json
  end

end