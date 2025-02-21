# next-optimize

Simple "Posts app" project for Maximilian Schwarzmüller's Next.js 15 course on Udemy 

https://www.udemy.com/course/nextjs-react-the-complete-guide


(Section 8)
NextJS App Optimizations

## Optimize images 
using NextJS Image Component
(both from source code and user-uploaded "unknown")

recommended way to specify image size => sizes="10vw" == approx 10% of viewport width

image hosts (like Cloudinary) allow you to manipulate the image url (parameters) to trigger Cloudinary to generate multiple versions
of your image file (and cache them)

you can use quality (value between 1 and 100)
```
<Image loader={imageLoader} src={post.image} fill alt={post.title} quality={50}/>
```
You can read the docs of the cloud/image provider (eg. "Image Transformations for Developers" in Cloudinary docs)

## Page Metadata

Static
```
export const metadata = {
  title: "Browse all our X posts.",
  description: "Browse all our posts.",
};
```

Dynamic

```
export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all ${numberOfPosts} posts.`,
    description: "Browse all our posts.",
  };
}
```

can put your metadata in your root layout it will be merged with any other metadata
(will act as a fallback if no metadata was defined for the page)

## Configure
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