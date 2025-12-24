import axios from "axios";
import API_BASE_URL from "./config";

const COURSE_GET_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service2/getalldata`;
const COURSE_POST_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service2/postdata`;
const COURSE_UPDATE_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service2/updatedata`;
const COURSE_DELETE_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service2/deletedata/`;
const COURSE_GET_BY_ID_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service2/getdata/`;

class CourseService {
  getAllCourses() {
    return axios.get(COURSE_GET_SERVICE_REST_API_URL);
  }

  postCourse(course) {
    return axios.post(COURSE_POST_SERVICE_REST_API_URL, course);
  }

  getCourseById(courseId) {
    return axios.get(COURSE_GET_BY_ID_SERVICE_REST_API_URL + courseId);
  }

  updateCourseData(course) {
    return axios.put(COURSE_UPDATE_SERVICE_REST_API_URL, course);
  }

  deleteCourseData(courseId) {
    return axios.delete(COURSE_DELETE_SERVICE_REST_API_URL + courseId);
  }
}

export default new CourseService();
