"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  postUrl: string;
  caption?: string;
}

export default function InstagramEmbed({ postUrl, caption }: InstagramEmbedProps) {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // If instgrm already loaded, process the embed
      if ((window as unknown as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm?.Embeds?.process) {
        (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
      }

      return () => {
        // cleanup
        const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
        if (existing) existing.remove();
      };
    }
  }, [postUrl]);

  return (
    <div className="flex flex-col items-center">
      {caption && (
        <p className="text-gray-500 text-sm mb-4 text-center">{caption}</p>
      )}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "100%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "19% 0" }} />
            <div
              style={{
                display: "block",
                height: "50px",
                margin: "0 auto 12px",
                width: "50px",
              }}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 60 60"
                version="1.1"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                    <g>
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.159 564.867,67.137 564.292,68.864 C563.99,69.618 563.594,70.097 562.93,70.761 C562.267,71.425 561.797,71.808 561.039,72.117 C559.313,72.688 557.332,73.066 554.279,73.201 C551.219,73.337 550.225,73.374 541,73.374 C531.775,73.374 530.781,73.337 527.721,73.201 C524.668,73.066 522.687,72.688 520.961,72.117 C520.203,71.808 519.733,71.425 519.07,70.761 C518.406,70.097 518.01,69.618 517.708,68.864 C517.133,67.137 516.756,65.159 516.622,62.101 C516.486,59.033 516.448,58.034 516.448,50 C516.448,41.965 516.486,40.966 516.622,37.899 C516.756,34.841 517.133,32.863 517.708,31.136 C518.01,30.378 518.406,29.901 519.07,29.237 C519.733,28.573 520.203,28.19 520.961,27.881 C522.687,27.31 524.668,26.933 527.721,26.797 C530.781,26.661 531.775,26.623 541,26.623 C550.225,26.623 551.219,26.661 554.279,26.797 C557.332,26.933 559.313,27.31 561.039,27.881 C561.797,28.19 562.267,28.573 562.93,29.237 C563.594,29.901 563.99,30.378 564.292,31.136 C564.867,32.863 565.244,34.841 565.378,37.899 C565.514,40.966 565.552,41.965 565.552,50 C565.552,58.034 565.514,59.033 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div style={{ paddingTop: "8px" }}>
              <div
                style={{
                  color: "#3897f0",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "18px",
                }}
              >
                Ver esta publicação no Instagram
              </div>
            </div>
          </a>
        </div>
      </blockquote>
    </div>
  );
}
