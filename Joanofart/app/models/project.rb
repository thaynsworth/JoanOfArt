class Project < ActiveRecord::Base
  belongs_to :user
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

  validates :name, :type, presence: true
  validates_attachment_content_type :avatar, :content_type => ["image/jpg","image/jpeg","image/png"]
end
