require 'sinatra'
require 'sinatra/activerecord'
require 'json'

set :database, "sqlite3:///foo.sqlite3"

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/question' do
  content_type :json
  @title = Title.all.shuffle.first
  @title.to_json
end

class Title < ActiveRecord::Base
  validates_presence_of :value
end