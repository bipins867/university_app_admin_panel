import axios from "axios";

class GlobalController {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async postData(url, obj, headers) {
    const fullUrl = `${this.baseUrl}/${url}`;

    try {
      const result = await axios.post(fullUrl, obj, {
        headers: headers,
      });

      // Check if the response status is within the 2xx range
      if (result.status >= 200 && result.status < 300) {
        return result.data;
      } else {
        // Throw an error if the status is not within the 2xx range
        throw new Error(`Request failed with status ${result.status}`);
      }
    } catch (err) {
      // Log the error and rethrow it for handling by the calling code

      throw err.response.data;
    }
  }
  async getData(url, headers) {
    const fullUrl = `${this.baseUrl}/${url}`;

    try {
      const result = await axios.get(fullUrl, {
        headers: headers,
      });

      // Check if the response status is within the 2xx range
      if (result.status >= 200 && result.status < 300) {
        return result.data;
      } else {
        // Throw an error if the status is not within the 2xx range
        throw new Error(`Request failed with status ${result.status}`);
      }
    } catch (err) {
      // Log the error and rethrow it for handling by the calling code

      throw err.response.data;
    }
  }
}

// Create an instance of GlobalController with the base URL
const remoteIp = process.env.REACT_APP_REMOTE_IP;
const remotePort = process.env.REACT_APP_REMOTE_PORT;
const baseUrl = `http://${remoteIp}:${remotePort}`;
const globalController = new GlobalController(baseUrl);

export default globalController;
