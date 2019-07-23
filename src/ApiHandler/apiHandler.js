import axios from "axios";

class HTTPRequestChecker {
  checkRoute(route, config) {
    try {
      if (!route) throw new Error("You must provide a target server URL");
      if (config && typeof config !== "object")
        throw new Error("Config must be an object");
    } catch (err) {
      console.error(err);
      return;
    }
  }
}

export default class APIHandler extends HTTPRequestChecker {
  constructor(url) {
    super(url);
    this.name = "APIHandler";
    this.url = url || process.env.REACT_APP_BACKEND_URL;
    if (!this.url) throw new Error("A URL must be specified as target domain.");
    this.api = axios.create({
      baseURL: this.url
    });
  }

  post(route, payload, config) {
    super.checkRoute(route, config);
    if (payload && typeof payload !== "object")
      throw new Error(
        `${
          this.name
        } post() function expects payload argument to be of type Object`
      );
    return this.api.post(route, payload);
  }

  get(route, query, config) {
    super.checkRoute(route, config);
    var queryString = "";
    if (query) {
      if (typeof query !== "object")
        throw new Error(
          `${
            this.name
          } get() function expects query argument to be of type Object`
        );
      let count = 0;
      let keyCount = Object.keys(query);
      for (let key in query) {
        if (!count) queryString += "?";
        if (count && count < keyCount) queryString += "&";
        queryString += `${key}=${query[key]}`;
        count++;
      }
    }

    return this.api.get(route + (queryString || ""), config);
  }

  update(route, payload, config) {
    super.checkRoute(route, config);
    if (!payload || typeof payload !== "object")
      throw new Error(
        `${
          this.name
        } update() function expects payload argument to be of type Object`
      );
    return this.api.patch(route, payload);
  }

  replace(route, payload, config) {
    super.checkRoute(route, config);
    if (!payload || typeof payload !== "object")
      throw new Error(
        `${
          this.name
        } replace() function expects payload argument to be of type Object`
      );
    return this.api.put(route);
  }

  destroy(route, id, config) {
    super.checkRoute(route, config);
    if (!id)
      throw new Error(
        `${
          this.name
        } destroy() function expects the id of the ressource targeted for deletion`
      );
    return this.api.delete(`${route}/${id}`);
  }
}
