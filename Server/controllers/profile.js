const ProfileService = require("../services/profile");
const profileService = ProfileService;

const getUserStories = async (req, res) => {
  try {
    const { userName } = req.params;
    const userStories = await profileService.getUserStories(userName);

    res.json(userStories);
  } catch (error) {
    console.error(
      `Error while fetching user: ${userName} stories , error: ${error.message})`
    );
    throw error;
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userName } = req.params;
    const userPosts = await profileService.getUserPosts(userName);

    res.json(userPosts);
  } catch (error) {
    console.error(
      `Error while fetching user: ${userName} posts , error: ${error.message})`
    );
    throw error;
  }
};

module.exports = {
  getUserStories,
  getUserPosts,
  // getStoryById,
  // getUserPosts,
};
