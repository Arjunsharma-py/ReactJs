import { toast } from "react-toastify";
import { BASECONFIG } from "../config";

const api = async ({
  body,
  headers = {},
  method,
  signal,
  url,
  formData = false,
}) => {
  let languge = localStorage.getItem("langs");
  if (languge === null) {
    languge = "en";
  }
  //  console.log(languge, "languge");
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Accept-Language"] = `${languge}`;
  headers["for-country"] = "IND";

  // headers["Authorization"] = `${token}`;
  if (!formData) {
    headers["content-type"] = "application/json";
  }
  try {
    const response = await fetch(BASECONFIG.BASE_URL + url, {
      method,
      headers,
      body: body ? (formData ? body : JSON.stringify(body)) : null,
      signal,
    });
    if (!response.ok) {
      throw await response.clone().json();
    }

    return response.clone().json();
  } catch (error) {
    console.log("error", error);
    // throw error;
    toast.error(error);
  }
};

export const allApi = async ({
  body,
  headers = {},
  method,
  signal,
  url,
  formData = false,
}) => {
  // headers['Access-Control-Allow-Origin'] = '*';
  console.log({ formData });
  try {
    return await fetch(url, {
      method,
      headers,
      body: body ? (formData ? body : JSON.stringify(body)) : null,
      signal,
    })
      .then((response) => {
        if (response.url.includes("X-Amz-Credential")) {
          return true;
        }
        return response.clone().json();
      })
      .then((data) => {
        console.log({ data });
        return data;
      });
  } catch (error) {
    throw Error(error);
  }
};

export default api;
