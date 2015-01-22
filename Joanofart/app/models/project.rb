class Project < ActiveRecord::Base
  belongs_to :user
  has_attached_file :image

  validates :name, :type, presence: true
  validates_attachment_content_type :image, :content_type => ["image/jpg","image/jpeg","image/png"]
end
