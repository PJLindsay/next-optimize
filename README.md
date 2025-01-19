# next-optimize

Simple "Posts app" project for Maximilian Schwarzmüller's Next.js 15 course on Udemy 

https://www.udemy.com/course/nextjs-react-the-complete-guide


(Section 8)
NextJS App Optimizations

Optimize images (both from source code and user-uploaded)
using NextJS Image Component

recommended way to specify image size => sizes="10vw" == approx 10% of viewport width

Page Metadata


Configure
You need to make a .env.local file with your Cloudinary keys
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

Development
```
npm install
npm run dev
```

create/run production image
```
npm build
npm run start
```