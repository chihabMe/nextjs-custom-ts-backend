import { GetServerSidePropsContext } from "next";

export default function prefixUrl(url: string, ctx: GetServerSidePropsContext) {
  const host = ctx.req.headers["host"];
  const protocol =
    process.env.NODE_ENV == "production" ? "https://" : "http://";
  return protocol + host + url;
}
