import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }) => {
  const title = url.searchParams.get("title") || "Pranjal Sharma";
  const description =
    url.searchParams.get("description") ||
    "Linux Systems Administrator";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#111111",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                fontSize: 32,
                fontWeight: 700,
              },
              children: "PRANJAL SHARMA",
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                fontWeight: 700,
                marginTop: 24,
              },
              children: title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 30,
                marginTop: 24,
                color: "#666666",
              },
              children: description,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    },
  );
};
