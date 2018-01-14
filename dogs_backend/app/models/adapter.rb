class Adapter

  attr_reader :dog_breeds


  def initialize
    @dog_breeds = []

    breed_request = RestClient.get('https://dog.ceo/api/breeds/list',
    headers={'Accept' => 'application/json', 'Content-Type' => 'application/json'})
    data = JSON.parse(breed_request)
    data["message"].each {|breed| @dog_breeds << breed}

    @dog_breeds.each do |breed|
      image_request = RestClient.get("https://dog.ceo/api/breed/#{breed}/images/random",
      headers={'Accept' => 'application/json', 'Content-Type' => 'application/json'})
      data = JSON.parse(image_request)
      image = data['message']
      Dog.create(breed: breed, image: image)
    end
  end

end
