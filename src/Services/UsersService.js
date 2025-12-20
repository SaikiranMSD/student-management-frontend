import axios from "axios";

const USER_GET_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service1/getalluser";

const USER_POST_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service1/postuser";

const USER_GET_BY_NAME_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service1/getuserdata/";

const USER_DELETE_SERVICE_REST_API_URL =
  "http://localhost:4444/api/service1/deleteuser/";

class UsersService {
  getAllUsers() {
    return axios.get(USER_GET_SERVICE_REST_API_URL);
  }

  postUser(user) {
    return axios.post(USER_POST_SERVICE_REST_API_URL, user);
  }

  getUserByName(username) {
    console.log(username);

    return axios.get(USER_GET_BY_NAME_SERVICE_REST_API_URL + username);
  }

  deleteStudentRecord(Username) {
    return axios.delete(USER_DELETE_SERVICE_REST_API_URL + Username);
  }
}

export default new UsersService();
