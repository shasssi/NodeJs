const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    contents: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;
