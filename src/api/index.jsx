import axios from "axios";

const URL = "https://backendnodejstzuzulcode.uw.r.appspot.com";

const instance = axios.create({
  baseURL: URL,
});

const post = (url, data) => {
  return instance.post(url, data);
};

const postWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tienes token",
    },
  };
};

const putWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tienes token",
    },
  };
};

const deleteWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.delete(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tienes token",
    },
  };
};

const recoverSession = async (url) => {
  const token = localStorage.getItem("token");

  if (token) {
    return await axios({
      method: "post",
      url: URL + url,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tienes token",
    },
  };
};

const getWithToken = async (url) => {
  const token = localStorage.getItem("token");

  if (token) {
    return await axios({
      method: "get",
      url: URL + url,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tienes token",
    },
  };
};

export {
  post,
  postWithToken,
  putWithToken,
  deleteWithToken,
  recoverSession,
  getWithToken,
};
