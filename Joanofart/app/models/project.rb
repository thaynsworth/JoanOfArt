class Project < ActiveRecord::Base
  belongs_to :user
  has_attached_file :avatar, :styles => { :large => "500x500", :medium => "300x300>", :thumb => "250x250>" }, :default_url => "/images/:style/missing.png"

  validates :name, :category, presence: true
  validates_attachment_content_type :avatar, :content_type => ["image/jpg","image/jpeg","image/png"]
end
