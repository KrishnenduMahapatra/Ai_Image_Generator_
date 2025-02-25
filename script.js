const generateForm = document.querySelector(".generate-form");
const imgGallery = document.querySelector(".image-gallery");
import HUGGINGFACE_API_KEY from "./test.js";
let isImageGenerating = false;

const updateImageCard = (imgUrlArray) => {
  imgUrlArray.forEach((imgUrl, index) => {
    const imgCard = imgGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector(".download-btn");
    
    imgElement.src = imgUrl;

    //When the image is loaded, remove the loading class and set the download    
    imgElement.onload = () => {
      imgCard.classList.remove("loading");
      downloadBtn.setAttribute("href", imgUrl);
      downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
    };
  });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
  //Fetch images from the AI image generator API
  try {
    const imagePromises = Array.from({ length: userImgQuantity }, async () => {
      const response = await fetch(
        "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
        {
          headers: {
            Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          },
          method: "POST",
          body: JSON.stringify({ inputs: userPrompt }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch images! Please try again");

      const result = await response.blob();//Extracting the image data from the response
      return URL.createObjectURL(result);
    });

    const imageUrls = await Promise.all(imagePromises);
    updateImageCard(imageUrls);
  } catch (error) {
    alert(error.message);
  } finally {
    isImageGenerating = false;
  }
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  if (isImageGenerating) return;
  isImageGenerating = true;
  //Get user input and image quantity values from the form
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = parseInt(e.srcElement[1].value);

  //Creating Html Markup for the image cards with loading state
  const imgCardMarkup = Array.from({ length: userImgQuantity }, () =>
    `<div class="img-card loading">
      <img src="img/Loading.svg" alt="Loading image">
      <a href="#" class="download-btn">
        <img src="img/download-button.svg" alt="Download">
      </a>
    </div>`
  ).join("");

  imgGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
