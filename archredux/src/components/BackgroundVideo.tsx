import { useEffect, useState, useRef } from "react";

interface VideoItem {
  id: number;
  title?: string;
  video: string;
  alt?: string;
}

interface BackgroundVideoProps {
  videos: VideoItem[];
  intervalTime?: number;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videos = [],
  intervalTime = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  // Refs for two video layers
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];

  useEffect(() => {
    if (videos.length < 2) return; // safety check

    const switchVideo = () => {
      const nextVideo = videoRefs[1].current;
      if (!nextVideo) return;

      // Assign next video source
      nextVideo.src = videos[nextIndex].video;
      nextVideo.load();

      nextVideo.oncanplaythrough = () => {
        setIsFading(true);

        // Start playing both for smooth overlap
        nextVideo.play().catch(() => {});
        videoRefs[0].current?.play().catch(() => {});

        // After fade duration, swap indexes
        setTimeout(() => {
          setIsFading(false);
          setCurrentIndex(nextIndex);
          setNextIndex((prev) => (prev + 1) % videos.length);
        }, 1000); // fade duration = 1s
      };
    };

    const interval = setInterval(switchVideo, intervalTime);
    return () => clearInterval(interval);
  }, [videos, nextIndex, intervalTime]);

  return (
    <div className="relative w-full h-full">
      {/* Current video */}
      <video
        ref={videoRefs[0]}
        src={videos[currentIndex]?.video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Next video (fades in) */}
      <video
        ref={videoRefs[1]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default BackgroundVideo;
