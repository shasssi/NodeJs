const Topic = require("./../models/topic");

const getAllTopics = async (req, res) => {
  try {
    const topicsData = await Topic.find({});
    return res.json({ data: topicsData || [] });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

module.exports =  getAllTopics;