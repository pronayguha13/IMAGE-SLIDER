const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]; //declaration of array of the image name

//declare function for handling image switch based on the direction parameter
const imageChangeHandler = (direction) => {
  //declare a variable named index
  //which will point to the index of the currently displaying image
  let index = findImageIndex();
  //if direction is 'next' increase the index
  if (direction === "next") {
    //if index >imageArray.length => index = 0
    if (index + 1 > imageArray.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }
  //if direction is 'prev' decrease the index
  else {
    //if index < 0 => index = imageArray.length
    // index = index < 0 ? imageArray.length : index - 1;
    if (index - 1 < 0) {
      index = imageArray.length - 1;
    } else {
      index = index - 1;
    }
  }
  //get the img element
  let imageContainer = document.getElementById("imageContainer");
  // set the src and alt attribute with
  // element index from the array
  imageContainer.src = `../public/static/image/${imageArray[index]}`;
  imageContainer.alt = `${imageArray[index]}`;
};

//declare method for handling next and prev button click
const btnClickHandler = () => {
  const leftBtn = document.getElementById("leftArrow");
  leftBtn.addEventListener("click", () => imageChangeHandler("prev"));
  const rightBtn = document.getElementById("rightArrow");
  rightBtn.addEventListener("click", () => imageChangeHandler("next"));
};

//method to find the index of the current displaying image
const findImageIndex = () => {
  //get the imageContainer of the page
  const imageContainer = document.getElementById("imageContainer");
  //take out the name of the image being displayed
  let targetElem = imageContainer.alt;
  //search in the imageArray
  let targetIndex = imageArray.indexOf(targetElem);
  //return the found index
  return targetIndex;
};

btnClickHandler();
