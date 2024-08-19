const axios = require("axios");

const storiesMockData = require("../mockData/storiesMockData.json");
const postsMockData = require("../mockData/postsMockData.json");

class ProfileService {
  async getUserStories(userName) {
    // const options = {
    //   method: "GET",
    //   url: "https://instagram-unofficial.p.rapidapi.com/user-stories",
    //   params: {
    //     session_key: "<REQUIRED>",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "cf58210ec1msh663b0790fa3960bp1988ccjsn2ed64f3f5bdb",
    //     "X-RapidAPI-Host": "instagram-unofficial.p.rapidapi.com",
    //   },
    // };

    try {
      //   const response = await axios.request(options);
      console.log(storiesMockData);
      return storiesMockData;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserPosts(userName) {
    try {
      console.log(postsMockData);
      return postsMockData;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new ProfileService();
