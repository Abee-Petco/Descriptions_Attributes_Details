const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const mockgoose = new Mockgoose(mongoose);

//development:
if (process.env.node_env === 'mockgoose') {
  mockgoose
    .prepareStorage()
    .then(() => {
      console.log('mockgoose running');
      mongoose.connect('mongodb://localhost/petco_descriptions', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    })
    .catch((err) => {
      console.log('Mockgoose connection failed: ', err);
    });
} else {
  mongoose.connect('mongodb://localhost/petco_descriptions', {
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
  console.log('connected to mongoDB');
});

// const descriptionSchema = new mongoose.Schema({
//   itemId: Number,
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   SKU: Number,
//   primaryBrand: String,
//   daysToShip: String,
//   directions: String,
//   primaryColor: String,
//   material: String,
//   length: String,
//   width: String,
//   additionalDetails: String,
// });

const descriptionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  SKU: Number,
  primaryBrand: String,
  daysToShip: String,
});

const directionsSchema = new mongoose.Schema({
  directions: String,
});

const attributesSchema = new mongoose.Schema({
  primaryColor: String,
  material: String,
  length: String,
  width: String,
});

const detailsSchema = new mongoose.Schema({
  additionalDetails: String,
});

const itemSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true,
  },
  description: [descriptionSchema],
  directions: [directionsSchema],
  attributes: [attributesSchema],
  details: [detailsSchema],
});

const Description = mongoose.model('Description', itemSchema);

const getTitleAndBrand = (itemId) => {
  return Description.find({ itemId: itemId }, { _id: 0, itemId: 1, title: 1, primaryBrand: 1 })
    .limit(1)
    .lean()
    .exec();
};

const getTitlesAndBrands = (itemIds) => {
  return Description.find({ itemId: { $in: itemIds } })
    .select('itemId title primaryBrand -_id')
    .lean()
    .exec();
};

// DB Methods for DescriptionObject

const getDescriptionObject = (itemId) => {
  return Description.find({ itemId: itemId }, {_id: 0, itemId: 0}).limit(1).lean().exec();
};

const postDescriptionObject = (itemId, descObj) => {
  return Description.update({ itemId: itemId }, descObj, { upsert: true, hint: { itemId: 1 } });
};

const putDescriptionObject = (itemId, descObj) => {
  return Description.update({ itemId: itemId }, descObj, { upsert: true, hint: { itemId: 1 } });
};

const deleteDescriptionObject = (itemId) => {
  return Description.remove({ itemId: itemId }, { justOne: true });
};

module.exports.Description = Description;
module.exports.db = db;
module.exports.getTitleAndBrand = getTitleAndBrand;
module.exports.getDescriptionObject = getDescriptionObject;
module.exports.getTitlesAndBrands = getTitlesAndBrands;
module.exports.postDescriptionObject = postDescriptionObject;
module.exports.putDescriptionObject = putDescriptionObject;
module.exports.deleteDescriptionObject = deleteDescriptionObject;
