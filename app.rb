require 'sinatra'
require 'json'
require 'pony'

configure :production, :development do
    enable :logging
end
before {
  env['rack.logger'] = Logger.new "#{settings.root}/log/#{settings.environment}.log"
}

get '/' do
	erb :index
end

get '/account' do
	erb :account
end

get '/campaign' do
	erb :campaign
end

post '/send_email' do
	puts params[:email]
	logger.info params[:email]
	content_type :json
	{ :key1 => 'value1', :key2 => 'value2' }.to_json
end

