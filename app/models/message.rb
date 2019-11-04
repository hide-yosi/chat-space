class Message < ApplicationRecord
  belongs_to :group
  belongs_to :message
    
  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
