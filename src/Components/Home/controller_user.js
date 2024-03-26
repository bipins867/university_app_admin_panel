import globalController from "../GlobalController";

export const getAllStudents = async () => {
  try {
    const response = await globalController.getData("user/get/allStudents", {});

    return response;
  } catch (e) {
    throw e.error;
  }
};

export const getAllFaculties = async () => {
  try {
    const response = await globalController.getData(
      "user/get/allFaculties",
      {}
    );

    return response;
  } catch (e) {
    throw e.error;
  }
};
