# frozen_string_literal: true
require "uri"
require "json"
require "net/http"

class LoyaltyProgram
  def get_points(customer_id)
    url = URI("https://api.smile.io/v1/customers/#{customer_id}")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = "Bearer #{ENV["API_KEY"]}"
    request["Content-Type"] = "application/json"

    response = https.request(request)
    puts response.read_body
    body = JSON.parse(response.body)
    body["customer"]["points_balance"]
  end

  def new_reward(customer_id)
    url = URI("https://api.smile.io/v1/activities")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Post.new(url)
    request["Content-Type"] = "application/json"
    request["Authorization"] = "Bearer #{ENV["API_KEY"]}"
    request.body = JSON.dump(
      {
        "activity": {
          "customer_id": customer_id,
          "token": "activity_tv19ciXW6Or5w3DLu59OFm4Z"
        }
      }
    )

    response = https.request(request)
    puts ">>>>>\n#{response.read_body}\n<<<<<<"
    response.read_body
  end
end
