require 'test_helper'

class AppTest < MiniTest::Unit::TestCase

  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_index_route
    get '/'
    assert last_response.ok?
  end

  def test_question_route
    get '/question'
    assert last_response.ok?
  end

end
