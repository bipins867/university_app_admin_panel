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

export const getAllAlumni = async () => {
  try {
    const response = await globalController.getData("user/get/allAlumni", {});

    return response;
  } catch (e) {
    throw e.error;
  }
};

export const getAllNotifications = async () => {
  try {
    const response = await globalController.getData(
      "notifications/get/notifications",
      {}
    );

    return response;
  } catch (e) {
    throw e.error;
  }
};

export const getAllDepartments = async () => {
  try {
    const response = await globalController.getData(
      "department/get/departments",
      {}
    );

    return response;
  } catch (e) {
    throw e.error;
  }
};

export const getAllClubsAndSocieties = async () => {
  try {
    const response = await globalController.getData(
      "clubAndSociety/get/clubAndSocieties",
      {}
    );

    return response;
  } catch (e) {
    throw e.error;
  }
};
