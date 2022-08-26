const checkRating = (product) => {
    let { price, rating, added_content} = product;
    const priceValue = parseInt(price);
    const ratingValue = parseInt(rating);
    const added_contentValue = parseInt(content);
  
    //if fiber, protein, added_sugar is not a num, then can not use them to determine healthy
    if (isNaN(price) || isNaN(rating) || isNaN(added_content)) {
      return null;
    }
  
    if ((price >= 5 || rating >= 5) && added_content < 5) {
      return true;
    } else {
      return false;
    }
  };
  
  module.exports = checkRating;






// const checkRating = confirmRating({ name, description,color, price, rating });
//   if (checkRating === true || checkRating === false) {
//     is_checkRating = checkRating;
//   }