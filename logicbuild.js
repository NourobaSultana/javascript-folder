import {getmovieReviewData} from "./data.js";
console.log(getmovieReviewData());

function init(){
    const movieReviewData = getmovieReviewData();

    paintStatistics(movieReviewData);
}

function paintStatistics(movieReviewData){
   const flatReviewData = movieReviewData.flat();
   const totalMovies= movieReviewData.length;
   const totalReview= flatReviewData.length;

   const totalRating =flatReviewData.reduce((acc, item) => {
    return acc+ item.rating;
   }, 0);
const avgRating= (totalRating/totalReview).toFixed(2);


}

init();