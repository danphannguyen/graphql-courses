import { Link, Vote } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";

export type PubSubChannels = {
  newLink: [{ createdLink: Link }];
  newVote: [{ createdVote: Vote }];
};

export const pubSub = new PubSub();
