mongoose.connect('mongodb://localhost:27017/yourDBName', { useNewUrlParser: true, useUnifiedTopology: true });

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  location: String,
  grade: String
});

const Food = mongoose.model('Food', foodSchema);

app.post('/submit-form', async (req, res) => {
  const { 'food-name': foodName, 'food-price': foodPrice, 'food-image': foodImage, 'destination-location': destinationLocation, grade } = req.body;
  const newFood = new Food({
    name: foodName,
    price: foodPrice,
    image: foodImage,
    location: destinationLocation,
    grade: grade
  });