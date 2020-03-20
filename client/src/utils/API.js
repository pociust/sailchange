import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3001" })

export default {
  getAllData: function () {
    return server.get("/api/data")
  },

  getBoatInfoById: function (id) {
    return server.get(`/api/data/${id}`)
  }
};