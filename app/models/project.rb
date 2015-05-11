class Project < ActiveRecord::Base
  belongs_to :user
  has_attached_file :avatar, :styles => { :large => "500x500", :medium => "300x300>", :thumb => "250x250>" },
                    :default_url => "/images/:style/missing.png",
                    :storage => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials }


  validates :name, :category, :description, :price, presence: true
  validates_attachment_content_type :avatar, :content_type => ["image/jpg","image/jpeg","image/png"]

  def s3_credentials
    {
      :bucket => ENV['S3_BUCKET_NAME'],
      :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
      :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
    }
  end
end
