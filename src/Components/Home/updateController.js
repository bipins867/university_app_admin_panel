import globalController from "../GlobalController";

export const updateInfo = async (url, info, token) => {
  try {
    const response = await globalController.postData(url, info, {
      token: token,
    });

    return response;
  } catch (e) {
    throw e.error;
  }
};
