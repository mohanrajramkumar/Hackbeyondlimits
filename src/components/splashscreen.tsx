import { useEffect, useState } from "react";
import bigscreensplash from "../images/bigscreensplash.mp4";
import tabscreensplash from "../images/tabsplash.mp4";
import mobilescreensplash from "../images/mobilesplash.mp4";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [show, setShow] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const updateVideoSource = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setVideoSrc(mobilescreensplash); // Mobile
      } else if (width > 768 && width <= 1366) {
        setVideoSrc(tabscreensplash); // Tablet (Adjusted for iPad Air, etc.)
      } else {
        setVideoSrc(bigscreensplash); // Laptop/PC/TV
      }
    };

    updateVideoSource(); // Set initial video source
    window.addEventListener("resize", updateVideoSource);

    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateVideoSource);
    };
  }, [onComplete]);

  if (!show || !videoSrc) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        key={videoSrc} // Force reloading video on src change
        autoPlay
        loop
        muted
        className="absolute w-full h-full"
        style={{ objectFit: "cover", minWidth: "100%", minHeight: "100%" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
