import axios from "axios";
import API_BASE_URL from "./config";

const STUDENT_GET_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/getalldata`;
const STUDENT_POST_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/postdata`;
const STUDENT_GET_BY_ID_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/getdata/`;
const STUDENT_UPDATE_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/updatedata`;
const STUDENT_DELETE_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/deletedata/`;
const STUDENT_GET_BY_NAME_SERVICE_REST_API_URL = `${API_BASE_URL}/api/service1/getdatabyname/`;

class StudentService {
  getAllStudents() {
    return axios.get(STUDENT_GET_SERVICE_REST_API_URL);
  }

  postStudent(student) {
    return axios.post(STUDENT_POST_SERVICE_REST_API_URL, student);
  }

  getStudentById(studentId) {
    return axios.get(STUDENT_GET_BY_ID_SERVICE_REST_API_URL + studentId);
  }

  updateStudentData(student) {
    return axios.put(STUDENT_UPDATE_SERVICE_REST_API_URL, student);
  }

  deleteStudentRecord(studentId) {
    return axios.delete(STUDENT_DELETE_SERVICE_REST_API_URL + studentId);
  }

  getStudentByName(studentName) {
    return axios.get(STUDENT_GET_BY_NAME_SERVICE_REST_API_URL + studentName);
  }
}

export default new StudentService();
