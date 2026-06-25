interface InstagramProfileEmbedProps {
  username?: string;
}

export default function InstagramProfileEmbed({
  username = "dentalcleanvr",
}: InstagramProfileEmbedProps) {
  return (
    <div className="w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <iframe
        src={`https://www.instagram.com/${username}/embed`}
        title={`Instagram @${username}`}
        className="w-full border-0"
        style={{ minHeight: "480px" }}
        scrolling="no"
        allowTransparency
        loading="lazy"
      />
    </div>
  );
}
