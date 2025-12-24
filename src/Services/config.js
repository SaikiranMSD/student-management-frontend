// API Base URL - uses environment variable if set, otherwise defaults to localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4444";

export default API_BASE_URL;

