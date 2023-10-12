const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const HomeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const AboutRouter = require('./routes/about');
const AppointmentRouter = require('./routes/appointment');
const MedicalRouter = require('./routes/medical');
const MapingEcommerceRouter = require('./routes/MapingEcommerce');
const FooterRouter = require('./routes/footer');
const EnquiryRouter = require('./routes/enquiry');
const HealingTouch = require('./routes/healingTouch');
const PatientReview = require('./routes/PatientReview');
const DrList = require('./routes/drList');
const LoginIdRouter = require('./routes/loginId');
const ImageUploadRouter = require('./routes/imagesUpload');
const PORT = process.env.PORT || 8080;

const server = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'images'));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://riyasurena137:R8Emr9gv8LkpVLNg@cluster0.q3ocj1n.mongodb.net/eikon', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

// Middleware to parse JSON request bodies
server.use(express.json());
server.use(morgan('default'));

// Serve static files from the 'public' directory
server.use(express.static('public'));
server.use(cors({
  origin: ["https://deploy-mean-1whq.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes using async functions
async function setupRoutes() {
  server.use('/imageUploads', express.static('public/images'));
  server.use('/products', productRouter.router);
  server.use('/user', userRouter.router);
  server.use('/about', AboutRouter.router);
  server.use('/home', HomeRouter.router);
  server.use('/appointments', AppointmentRouter.router);
  server.use('/medical', MedicalRouter.router);
  server.use('/MapingEcommerce', MapingEcommerceRouter.router);
  server.use('/footer', FooterRouter.router);
  server.use('/enquiry', EnquiryRouter.router);
  server.use('/healingTouch', HealingTouch.router);
  server.use('/PatientReview', PatientReview.router);
  server.use('/drList', DrList.router);
  server.use('/imageUpload', ImageUploadRouter.router);
  server.use('/loginId', LoginIdRouter.router);
  server.use('/images', express.static('public/images'));

  // Add a route to fetch data from MongoDB
  server.get('/', async (req, res) => {
    try {
      const db = await connectToDatabase(); // Connect to the database
      const collection = db.collection('eikon'); // Replace with your collection name

      // Query MongoDB to retrieve data (modify this query as needed)
      const data = await collection.find({}).toArray();

      // Send the retrieved data as a JSON response
      res.json({ data });
    } catch (err) {
      console.error('Error fetching data from MongoDB:', err);
      res.status(500).json({ error: 'Error fetching data from MongoDB' });
    }
  });
}

const imageUrls = [];

server.get('/listImages', (req, res) => {
  const imageDir = path.join(__dirname, 'public', 'images');

  // Use the 'fs' module to read the contents of the directory
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading images directory' });
    }

    // Filter out only image files (you can adjust this filter as needed)
    const imageFiles = files.filter((file) => {
      const extname = path.extname(file);
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(extname.toLowerCase());
    });

    // Create an array of image URLs
    const imageUrls = imageFiles.map((file) => `/${file}`);

    res.json({ images: imageUrls });
  });
});

server.post('/imageUpload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Get the image name from the uploaded file's filename
  const imageName = req.file.filename;
  console.log(imageName);

  // Add the image name to the imageUrls array
  imageUrls.push(imageName);

  // You can send back the updated imageUrls array as a response
  res.json({ imageUrl: `/${imageName}` });

  // You can do further processing with the uploaded file here
  // For now, just send a success response
  res.send('File uploaded successfully.');
});

server.delete('/deleteImage/:filename', (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, 'public', 'images', filename);

  // Use the 'fs' module to delete the image file
  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting image' });
    }

    // Remove the deleted image URL from your 'imageUrls' array if needed
    const index = imageUrls.indexOf(`/images/${filename}`);
    if (index !== -1) {
      imageUrls.splice(index, 1);
    }

    res.json({ message: 'Image deleted successfully' });
  });
});

module.exports = server;
