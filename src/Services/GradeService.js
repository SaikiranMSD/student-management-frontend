import axios from "axios";
const GRADE_GET_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service3/getAllStudentMarks";
const GRADE_POST_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service3/postmarksdata/";
const GRADE_GET_BY_ID_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service3/getmarkssheet/";
class GradeService {
  getAllMarkSheets() {
    return axios.get(GRADE_GET_SERVICE_REST_API_URL);
  }
  postMarks(studentId, marks1, marks2) {
    return axios.post(
      GRADE_POST_SERVICE_REST_API_URL + studentId + "/" + marks1 + "/" + marks2
    );
  }
  getMarksById(studentId) {
    return axios.get(GRADE_GET_BY_ID_SERVICE_REST_API_URL + studentId);
  }
}
export default new GradeService();
