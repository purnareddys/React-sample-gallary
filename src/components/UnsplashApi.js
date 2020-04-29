import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/photos/random",
  headers: {
    Authorization: "Client-ID fBO5HHZyogglYcpH8XXXdHouA60FoUuXu9zVVfnao2w",
  },
});
