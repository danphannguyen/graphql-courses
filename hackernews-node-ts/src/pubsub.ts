import { Link } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";

export type PubSubChannels = {
  newLink: [{ createdLink: Link }];
};

export const pubSub = new PubSub();
