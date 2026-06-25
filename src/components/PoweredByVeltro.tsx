const VELTRO_DIGITAL_NAME = "Veltro Digital";
const VELTRO_DIGITAL_URL = "https://veltrodigital.com.br";

type PoweredByVeltroProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function PoweredByVeltro({
  variant = "light",
  className = "",
}: PoweredByVeltroProps) {
  const textClass =
    variant === "dark" ? "text-white/40" : "text-gray-400";

  const linkClass =
    variant === "dark"
      ? "text-white/60 underline-offset-2 transition-colors hover:text-sky-300 hover:underline"
      : "text-gray-500 underline-offset-2 transition-colors hover:text-[#1B3A6B] hover:underline";

  return (
    <p
      className={`text-center text-[11px] tracking-wide ${textClass} ${className}`.trim()}
    >
      powered by{" "}
      <a
        href={VELTRO_DIGITAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {VELTRO_DIGITAL_NAME}
      </a>
    </p>
  );
}
