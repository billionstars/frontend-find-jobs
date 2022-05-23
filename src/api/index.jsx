import axios from "axios";

const URL = "https://backendnodejstzuzulcode.uw.r.appspot.com";

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const post = (url, data) => {
  return instance.post(url, data);
};

const postWithToken = () => {
  return "postWithToken";
};

const putWithToken = () => {
  return "putWithToken";
};

const deleteWithToken = () => {
  return "deleteWithToken";
};

export { post, postWithToken, putWithToken, deleteWithToken };
