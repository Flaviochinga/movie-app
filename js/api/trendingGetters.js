//const url= "https://api.themoviedb.org/3/trending/all/day?language=en-US";
const url= "https://api.themoviedb.org/3/trending/all/day?language=en-US";



const opts = {

method: "GET",
headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGIzZmI2NjRjYzMxNTNkZmE2ZWMwYWJkOTdlYThlYyIsInN1YiI6IjY1ZTg2YzI4YTFhOWJhMDE2MmJlNTdlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.luHNu00kHf0IGb70aCq1pm3EOYG6-Uzebj9u60bCdak"
},

};

export const getTrending = async (baseUrl) => {

const response = await fetch(baseUrl +"all/day?language=en-US", opts);

const data = await response.json();

return data;

}



/**getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza
 */

export const getTrendingMovies = async (baseUrl) => {

    const response = await fetch(baseUrl +"movie/day?language=en-US", opts);
    
    const data = await response.json();
    
    return data;
    
    }