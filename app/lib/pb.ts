import PocketBase from "pocketbase";

export const pb = new PocketBase("https://ivs-nikestore-pb.apps.aiweb.cloud");

pb.autoCancellation(false);
