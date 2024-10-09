const Topic = require("./../models/topic");
// const {
//   getCachedData,
//   setCachedData,
// } = require("../cache/data_types/string");
// const { TOPICS } = require("../cache/constant");

const getAllTopics = async (req, res) => {
  try {
    let topicsData = [];
    const result = [];
    // await getCachedData(TOPICS);
    // if (result) {
      // topicsData = JSON.parse(result);
    // } else {
      topicsData = await Topic.find({});
      // setCachedData(TOPICS, topicsData);
    // }
    return res.json({ data: topicsData || [] });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

module.exports = getAllTopics;
