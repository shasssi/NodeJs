const redis = require("../redis");

const getCachedData = async (key) => {
  let res = null;
  try {
    res = await redis.get(key);
    console.log("get result", res);
  } catch (error) {
    console.log("get error", error);
  } finally {
    return res;
  }
};

const setCachedData = (key, data) => {
  redis.set(key, JSON.stringify(data), (err, res) => {
    if (err) {
      console.log("set error", err);
    }
    console.log("set result", res);
  });
};

const deleteCachedData = (key) => {
  redis.del(key, (err, res) => {
    if (err) {
      console.log("del error", err);
    }
    console.log("del result", res);
  });
};

module.exports = {
  getCachedData,
  setCachedData,
  deleteCachedData,
};
