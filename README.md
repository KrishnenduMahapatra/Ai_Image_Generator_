
# AI_Image_Generator using Javascript, Html, Css and Huggingface Api.

An interactive AI-powered image generator website built using **HTML**, **CSS**, and **JavaScript**. The platform allows users to input creative text prompts and generate unique images using AI via an integrated API.


## 🌐 Demo

![Demo](assets/aiimagegenerator.png)  
[🔗 Live](https://ai-image-generator-km.netlify.app/)


## 🚀 Features

- 🧠 Generate realistic images from text using Hugging Face models
- 📝 Enter custom prompts

- 🔢 Control the number of images generated
- 📥 click to download generated images
- ⚡ Fast, simple frontend 



## 📖 How to use

1. **Sign up** on [huggingface.co](https://huggingface.co) and get your Inference API key.
2. Add your API key to a new file called `api.js` in the project root:
   ```javascript
   const api = "YOUR_HUGGINGFACE_API_KEY";
    ```

3. Open index.html in a browser.

4. Enter a prompt, choose the size and number of images, and click Generate.

5. Click any image to download it.

## 📡 API Reference

This project uses Hugging Face’s Inference API, specifically for image generation via models like stabilityai/stable-diffusion.

🧠 Example API Call
```javascript
POST https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2
```
| Key             | Value                 |
| --------------- | --------------------- |
| `Authorization` | `Bearer YOUR_API_KEY` |
| `Content-Type`  | `application/json`    |

Body:
```
{
  "inputs": "a scenic mountain landscape during sunrise"
}
```
💡 Visit Hugging Face Inference Docs for more details.


## 💻 Run Locally
```
git clone https://github.com/KrishnenduMahapatra/AI_Image_Generator_.git
```
ai-image-generator-huggingface

    1. Create a file called api.js in the root folder and add your Hugging Face API key:

```javascript
const api = "YOUR_HUGGINGFACE_API_KEY";
```
    2. Open index.html in any browser.
## 🗺️ Roadmap

- ✅ Prompt-based generation

- ⏳ Add image style presets (e.g., anime, 3D, pixel art)

- ⏳ Loading spinner and error handling UI



## 🙏 Acknowledgements

 - [GeeksforGeeks tutorial on building an AI image generator with HTML, CSS & JS](https://www.geeksforgeeks.org/javascript/build-an-ai-image-generator-website-in-html-css-and-javascript/)

 - [Hugging Face Inference API](https://huggingface.co/docs/inference-providers/index)



## 👤 Authors

- [@Krishnendu Mahapatra](https://github.com//KrishnenduMahapatra/)

