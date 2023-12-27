import AppDataService from "./AppDataService";
import { customHeaders, customHeadersForFile } from "./utils/constant";

export default class MoviesService {
  static async getAllMovies(page = 1, itemsPerPage = 8, token) {
    return await AppDataService.get(
      `movie?page=${page}&itemsPerPage=${itemsPerPage}`,
      customHeaders(token)
    );
  }

  static async deleteMovie(movieId, token) {
    return await AppDataService.delete(
      `movie/${movieId}`,
      null,
      customHeaders(token)
    );
  }

  static async updateMovieDetails(movieId, body, token) {
    return await AppDataService.patch(
      `movie/${movieId}`,
      body,
      customHeaders(token)
    );
  }

  static async addMovieDetails(body, token) {
    const formData = new FormData();

    formData.append("title", body?.title);
    formData.append("publishingYear", body?.publishingYear);
    formData.append("poster", body?.poster);

    console.info("file ---- ", body, formData);
    for(var pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

    return await AppDataService.post(`movie`, formData, customHeadersForFile(token));
  }
}
