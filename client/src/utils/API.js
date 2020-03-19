import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3001" })

export default {
  getAllData: function () {
    return server.get("/api/data")
  },

  // getAllBoats: function () {
  //   return server.get
  // }
};