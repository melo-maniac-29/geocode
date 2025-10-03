import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function GlowButton({ children, href, onClick, variant = "primary" }: GlowButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 overflow-hidden group inline-block";
  const primaryClasses = "bg-red-500 text-white hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]";
  const secondaryClasses = "bg-black border-2 border-red-500 text-red-500 hover:bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]";

  const classes = `${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
