const Organization = require('../modal/organization');
const Driver = require('../modal/driver');
const User = require('../modal/user');
const Ride = require('../modal/ride');

// POST /api/organizations/join/driver
exports.joinDriverToOrganization = async (req, res, next) => {
  const { driverId, organizationName } = req.body;
  try {
    // Find organization by name
    const organization = await Organization.findOne({ name: organizationName });
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Find driver by ID
    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }

    // Add driver to organization's driver list
    organization.drivers.push(driver._id);

    // Save changes to organization
    await organization.save();

    // Add organization to driver's organization list
    driver.organizations.push(organization);

    // Save driver to database
    await driver.save();

    // Return success response
    res.status(201).json({ message: 'Driver added to organization' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


// POST /api/organizations/join
exports.joinUserToOrganization = async (req, res, next) => {
  const { userId, orgId } = req.body;

  try {
    // Find organization by ID
    const organization = await Organization.findById(orgId);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add user to organization's employee list
    organization.employees.push(user);

    // Save changes to organization
    await organization.save();

    // Add organization to user's organization list
    user.organizations.push(organization);

    // Save user to database
    await user.save();

    // Return success response
    res.status(201).json({ message: 'User added to organization' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// GET /api/organizations/:id
exports.getOrganizationById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Find organization by ID
    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Return organization details
    res.json({ organization });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// POST /api/organizations/create
exports.createOrganization = async (req, res, next) => {
  const { userId, organizationName, organizationDescription, organizationAddress } = req.body;

  try {
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create new organization
    const organization = new Organization({
      name: organizationName,
      description: organizationDescription,
      address: organizationAddress,
      admin: user
    });

    // Update user's organization and isAdmin fields
    user.organization = organization;
    user.isAdmin = true;

    // Save changes to user and organization
    await Promise.all([user.save(), organization.save()]);

    // Return success response with user and organization IDs
    res.status(201).json({
      userId: user._id,
      organizationId: organization._id,
      name: organization.name,
      description: organization.description,
      address: organization.address,
      admin: organization.admin
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// GET /api/users/:id
exports.getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Find user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user information
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      organization: user.organization,
      isAdmin: user.isAdmin
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


// GET /api/organizations
exports.getOrganizations = async (req, res, next) => {
  try {
    // Find all organizations
    const organizations = await Organization.find();

    // Return organizations information
    res.json(organizations);
  } catch (error) {
    // Handle errors
    next(error);
  }
};


exports.getRides = async (req, res, next) => {
  const organizationId = req.params.id;

  try {
    const rides = await Ride.find({ organization: organizationId })
      .populate('driver')
      .populate('organization')
      .populate('passengers');

    res.status(200).json({ rides });
  } catch (error) {
    next(error);
  }
};

