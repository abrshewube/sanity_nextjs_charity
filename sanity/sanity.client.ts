// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "oiyb7hio",
  dataset: "production",
  apiVersion: "2023-07-19",
  useCdn: false,
};

const client = createClient(config);

export default client;