class User < ApplicationRecord
  has_secure_password

  has_many :recipes
  has_many :groceries

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
