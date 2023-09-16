# File Upload Project Using Multer Package

This project from John Smilga's Node.js course is a practical demonstration of file uploading techniques, both locally and on the cloud using Cloudinary. Additionally, it showcases how to perform checks on file size and format before uploading.

#### Project Setup

To set up this project, follow these steps:

1. Create a `.env` file in the root directory of your project.

2. Inside the `.env` file, add the following environment variables with their respective values:

- `MONGO_URI`: Your MongoDB database connection URI.
- `CLOUDINARY_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
  Your `.env` file should look something like this:

  ```sh
  MONGO_URI=your_mongo_db_uri_here
  CLOUDINARY_NAME=your_cloudinary_name_here
  CLOUDINARY_API_KEY=your_cloudinary_api_key_here
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here
  ```

3. After setting up your environment variables, save the `.env` file.

4. Open your terminal and navigate to the project's root directory.

5. Run the following commands to install the project dependencies and start the application:

   ```sh
   npm install
   npm start
   ```

   This will install the required Node.js packages and start the application.

6. Once the application is running, open your web browser and go to `http://localhost:3000` to access and interact with the project locally.

Now you have successfully set up the File Upload project, and it's ready to run. You can access it by navigating to the appropriate URL in your web browser or as specified in your application's configuration.

Feel free to explore the code and learn how file uploads and validations are implemented using Cloudinary and other technologies.
