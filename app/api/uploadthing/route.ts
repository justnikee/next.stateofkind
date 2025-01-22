import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/app/utils/uploadthing";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});