const mongoose = require('mongoose');

// this is our schema to represent a blogpost
const blogpostSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String},
  author: {
    firstName: String,
    lastName: String 
  },
  created: {type: Date, default: Date.now}
});

// *virtuals* (http://mongoosejs.com/docs/guide.html#virtuals)
// allow us to define properties on our object that manipulate
// properties that are stored in the database. Here we use it
// to generate a human readable string based on the address object
// we're storing in Mongo.
blogpostSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

// this is an *instance method* which will be available on all instances
// of the model. This method will be used to return an object that only
// exposes *some* of the fields we want from the underlying data
blogpostSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    author: this.authorString,
    content: this.content,
    title: this.title,
    created: this.created,
  };
}

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = {Blogpost};
