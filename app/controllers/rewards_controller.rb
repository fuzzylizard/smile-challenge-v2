# frozen_string_literal: true

class RewardsController < ApplicationController
  def index
    rewards = [
      {
        id: 1,
        name: "Hug",
        cost: 1200,
        image: "🤗"
      },
      {
        id: 2,
        name: "Free Time",
        cost: 2300,
        image: "⏰"
      },
      {
        id: 3,
        name: "Weekend Away",
        cost: 57000,
        image: "🏖️"
      },
      {
        id: 4,
        name: "Dinner",
        cost: 24748,
        image: "🍝"
      },
      {
        id: 5,
        name: "Movie Night",
        cost: 42500,
        image: "🍿"
      },
      {
        id: 6,
        name: "Pool Party",
        cost: 75250,
        image: "👙"
      }
    ]

    render json: rewards, status: :ok
  end
end
