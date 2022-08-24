import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pFv5vpeIX0qhfcP5HVdJHWTSY04tCliBqhIYRewquEI",
  },
});
