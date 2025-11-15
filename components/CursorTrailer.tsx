import { useEffect } from "react";
export default function CursorTrailer() {
  useEffect(() => {
    const trailer = document.getElementById("trailer") as HTMLElement;
    const cursor = document.getElementById("cursor") as HTMLElement;
    const animateTrailer = (e: MouseEvent, i: boolean) => {
      const keyframes = {
        left: e.clientX - trailer.offsetWidth / 2 + "px",
        top: e.clientY - trailer.offsetWidth / 2 + "px",
        transform: `scale(${i ? 1.5 : 1})`,
        background: i ? "#333333a0" : "transparent",
        borderColor: i ? "transparent" : "#333",
      };
      trailer.animate(keyframes, {
        duration: 300,
        fill: "forwards",
      });
    };
    const animateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
      cursor.style.top = e.clientY - cursor.offsetWidth / 2 + "px";
    };
    window.onmousemove = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const interactable = target?.closest("a, button");
      const interacting = interactable !== null;
      animateTrailer(e, interacting);
      animateCursor(e);
    };
  }, []);
  return (
    <>
      <div
        id="trailer"
        className="hidden z-40 md:block h-6 w-6 border-muted rounded-full border fixed pointer-events-none -top-6 -left-6"
      ></div>
      <div
        id="cursor"
        className="hidden z-40 md:block h-2 w-2 bg-accent fixed rounded-full pointer-events-none -top-6 -left-6"
      ></div>
    </>
  );
}
