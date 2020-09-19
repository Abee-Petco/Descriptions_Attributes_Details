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

//MODELS SECTION

const descriptionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    SKU: Number,
    primaryBrand: String,
    daysToShip: String,
  },
  { _id: false }
);

const directionsSchema = new mongoose.Schema(
  {
    directions: String,
  },
  { _id: false }
);

const attributesSchema = new mongoose.Schema(
  {
    primaryColor: String,
    material: String,
    length: String,
    width: String,
  },
  { _id: false }
);

const detailsSchema = new mongoose.Schema(
  {
    additionalDetails: String,
  },
  { _id: false }
);

const itemSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true,
  },
  description: descriptionSchema,
  directions: directionsSchema,
  attributes: attributesSchema,
  details: detailsSchema,
});

const Description = mongoose.model('Description', itemSchema);

//itemInformation Controllers

const getTitleAndBrand = (itemId) => {
  return Description.aggregate(
    [
      { $match: { itemId: itemId } },
      {
        $project: {
          title: '$description.title',
          primaryBrand: '$description.primaryBrand',
          _id: 0,
        },
      },
      { $limit: 1 },
    ],
    { hint: { itemId: itemId } }
  ).exec();
};

const getTitlesAndBrands = (itemIds) => {
  return Description.aggregate([
    { $match: { itemId: { $in: itemIds } } },
    {
      $project: {
        title: '$description.title',
        primaryBrand: '$description.primaryBrand',
        _id: 0,
      },
    },
    { $limit: itemIds.length },
  ]).exec();
};

// descriptionObject Controllers

const getDescriptionObject = (itemId) => {
  return Description.find({ itemId: itemId }, { _id: 0, __v: 0, itemId: 0 }).limit(1).lean().exec();
};

const postDescriptionObject = (descObj) => {
  return new Description(descObj).save({ validateBeforeSave: false });
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
