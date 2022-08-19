import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client=sanityClient({
    projectId:"xxdz4mmk",
    dataset:'production',
    apiVersion:"2022-08-15",
    useCdn:true,
    token:"skOyf4Cmi8jO1JJpXQl9E9FZ5vu6NScT5vZDj0J3c9Knwmgnct8UBZsV5NJRqKhyvLx0mBz6g4uChehXxxu1paahx60NmRpbIRTUjqBmw5oNuVc2j9kc7BfL2NRlHcr8fU4rkJ254upwMmC4XD9xkRVk2DF8tJFBVBubBYUDDKGa8W9wJifz"
})

const builder=ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)