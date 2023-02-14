import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import { REACT_APP_PROJECT_ID, REACT_APP_DATASET } from "@env";

const client = sanityClient({
  projectId: REACT_APP_PROJECT_ID,
  dataset: REACT_APP_DATASET,
  useCdn: true,
  apiVersion: "v2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
