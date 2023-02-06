class User < ApplicationRecord
  has_secure_password

  has_many :recipes

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
