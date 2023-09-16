# File Upload Project Using Multer Package

This project from John Smilga's Node.js course is a practical demonstration of file uploading techniques, both locally and on the cloud using Cloudinary. Additionally, it showcases how to perform checks on file size and format before uploading.

#### Project Setup

To set up this project, follow these steps:

1. Clone this repository:

```sh
https://github.com/edriso/file-upload-using-multer.git
```

2. Navigate to the project directory:

```sh
cd file-upload-using-multer
```

3. Rename `.env.example` file to `.env`, add the following environment variables with their respective values:

- `MONGO_URI`: Your MongoDB database connection URI.
- `CLOUDINARY_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.

4. After setting up your environment variables, save the `.env` file.

5. Open your terminal and navigate to the project's root directory.

6. Run the following commands to install the project dependencies and start the application:

   ```sh
   npm install
   npm start
   ```

   This will install the required Node.js packages and start the application.

7. Once the application is running, open your web browser and go to `http://localhost:3000` to access and interact with the project locally.

Now you have successfully set up the File Upload project, and it's ready to run. You can access it by navigating to the appropriate URL in your web browser or as specified in your application's configuration.

Feel free to explore the code and learn how file uploads and validations are implemented using Cloudinary and other technologies.
