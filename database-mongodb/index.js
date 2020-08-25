const mongoose = require('mongoose');
const Mockgoose = require('mockgoose');

const mockgoose = new Mockgoose(mongoose);

//development:
if (process.env.node_env === 'test') {
  mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://localhost/description_directions_attributes', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  });
} else {
  mongoose.connect('mongodb://localhost/description_directions_attributes', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

//production:
// mongoose.connect('mongodb://ec2-52-14-208-55.us-east-2.compute.amazonaws.com/Description', { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to db');
});

db.once('open', () => {
  console.log('connected to db');
});

const descriptionSchema = new mongoose.Schema({
  itemId: String,
  title: {
    type: String,
    required: true,
  },
  description: String,
  SKU: String,
  primaryBrand: String,
  daysToShip: String,
  directions: String,
  primaryColor: String,
  material: String,
  length: String,
  width: String,
  additionalDetails: String,
});

const Description = mongoose.model('Description', descriptionSchema);

const getTitleAndBrand = (itemId) => {
  return Description.find({ itemId: itemId }).select('title primaryBrand -_id').lean().exec();
};

const getTitlesAndBrands = (itemIds) => {
  return Description.find({ itemId: { $in: itemIds } })
    .select('itemId title primaryBrand -_id')
    .lean()
    .exec();
};

// DB Methods for getDescriptionObject

const getDescriptionObject = (itemId) => {
  return Description.find({ itemId: itemId }).select('-_id -__v').lean().exec();
};

const postDescriptionObject = (descObj) => {
  return Description.create(descObj);
};

const putDescriptionObject = (itemId, descObj) => {
  return Description.findOneAndUpdate({ itemId: itemId }, descObj);
};

const deleteDescriptionObject = (itemId) => {
  return Description.findOneAndDelete({ itemId: itemId });
};

module.exports.Description = Description;
module.exports.db = db;
module.exports.getTitleAndBrand = getTitleAndBrand;
module.exports.getDescriptionObject = getDescriptionObject;
module.exports.getTitlesAndBrands = getTitlesAndBrands;
module.exports.postDescriptionObject = postDescriptionObject;
module.exports.putDescriptionObject = putDescriptionObject;
module.exports.deleteDescriptionObject = deleteDescriptionObject;
