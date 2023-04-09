const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Driver = require('../modal/driver');
const Passenger = require('../modal/passenger');

// Signup function for drivers
exports.driverSignup = async (req, res) => {
  const { name, email, password, phoneNo, licensePlate, rcNo, carModel } = req.body;

  // Check if user with the same email exists
  const existingUser = await Driver.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new driver object
  const newDriver = new Driver({
    name,
    email,
    password: hashedPassword,
    phoneNo,
    licensePlate,
    rcNo,
    carModel
  });

  // Save the driver to the database
  try {
    const savedDriver = await newDriver.save();

    // Create JWT token
    const token = jwt.sign({ userId: savedDriver._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Send response with user info and token
    res.status(201).json({
      message: 'Driver created successfully',
      userId: savedDriver._id,
      name: savedDriver.name,
      email: savedDriver.email,
      car: savedDriver.car,
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Signup function for passengers
exports.passengerSignup = async (req, res) => {
  const { name, email, password, aadharNo, phoneNo} = req.body;

  // Check if user with the same email exists
  const existingUser = await Passenger.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new passenger object
  const newPassenger = new Passenger({
    name,
    email,
    password: hashedPassword,
    aadharNo,
    phoneNo
  });

  // Save the passenger to the database
  try {
    const savedPassenger = await newPassenger.save();

    // Create JWT token
    const token = jwt.sign({ userId: savedPassenger._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Send response with user info and token
    res.status(201).json({
      message: 'Passenger created successfully',
      userId: savedPassenger._id,
      name: savedPassenger.name,
      email: savedPassenger.email,
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if user with the email exists in either the Driver or Passenger collection
    const driver = await Driver.findOne({ email });
    const passenger = await Passenger.findOne({ email });
  
    // If user with the email doesn't exist, return error
    if (!driver && !passenger) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    // Check if the password matches the hashed password in the database
    let user;
    if (driver) {
      user = driver;
    } else {
      user = passenger;
    }
  
    const isPasswordMatch = await bcrypt.compare(password, user.password);
  
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
    // Send response with user info and token
    res.status(200).json({
      message: 'Login successful',
      userId: user._id,
      name: user.name,
      email: user.email,
      role: driver ? 'driver' : 'passenger',
      token
    });
  };