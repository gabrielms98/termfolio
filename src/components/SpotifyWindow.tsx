import { useState, useEffect, useRef } from "react";
import WindowFrame from "./WindowFrame";

interface Track {
  title: string;
  artist: string;
  duration: string;
  durationSec: number;
  color: string;
}

const playlist: Track[] = [
  {
    title: "Kingslayer",
    artist: "Bring Me The Horizon ft. BABYMETAL",
    duration: "3:40",
    durationSec: 220,
    color: "from-red-900 to-black",
  },
  {
    title: "Boys Don't Cry",
    artist: "The Cure",
    duration: "2:35",
    durationSec: 155,
    color: "from-emerald-800 to-teal-950",
  },
  {
    title: "L'Amour Toujours",
    artist: "Gigi D'Agostino",
    duration: "3:42",
    durationSec: 222,
    color: "from-blue-700 to-indigo-950",
  },
  {
    title: "Overkill",
    artist: "Creepy Nuts (DAN DA DAN OP)",
    duration: "3:24",
    durationSec: 204,
    color: "from-orange-700 to-red-950",
  },
  {
    title: "Tribute",
    artist: "Tenacious D",
    duration: "5:10",
    durationSec: 310,
    color: "from-amber-700 to-stone-950",
  },
];

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function SpotifyWindow({ appId = "SPOTIFY_APP" }: { appId?: string }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const track = playlist[current];

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= track.durationSec) {
            next();
            return 0;
          }
          return p + 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing, current]);

  function play(index: number) {
    setCurrent(index);
    setProgress(0);
    setPlaying(true);
  }

  function next() {
    const n = (current + 1) % playlist.length;
    setCurrent(n);
    setProgress(0);
  }

  function prev() {
    if (progress > 3) {
      setProgress(0);
    } else {
      const n = (current - 1 + playlist.length) % playlist.length;
      setCurrent(n);
      setProgress(0);
    }
  }

  return (
    <WindowFrame
      appId={appId}
      title="Spotify"
      className="bg-[#121212] rounded-xl w-[28rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col"
      headerClassName="bg-[#181818]"
    >
      {/* Now playing hero */}
      <div
        className={`bg-gradient-to-b ${track.color} px-5 pt-5 pb-4 flex gap-4 items-end transition-all duration-500`}
      >
        <div className="w-20 h-20 rounded-md bg-black/30 flex items-center justify-center text-3xl shrink-0 shadow-lg">
          🎵
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
            Now Playing
          </p>
          <p className="font-bold text-lg leading-tight truncate">
            {track.title}
          </p>
          <p className="text-sm text-white/70 truncate">{track.artist}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-5 pt-3 pb-1 bg-[#181818]">
        <div className="w-full h-1 bg-[#4d4d4d] rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-1000 ease-linear"
            style={{
              width: `${(progress / track.durationSec) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-[#a7a7a7] mt-1">
          <span>{formatTime(progress)}</span>
          <span>{track.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 py-2 bg-[#181818]">
        <button
          type="button"
          aria-label="Previous track"
          className="text-white/70 hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0"
          onClick={() => prev()}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label={playing ? "Pause" : "Play"}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer border-0 p-0"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#121212">
              <path d="M6 19h4V5H6zm8-14v14h4V5z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#121212">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          aria-label="Next track"
          className="text-white/70 hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0"
          onClick={() => next()}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>

      {/* Playlist */}
      <div className="bg-[#121212] px-3 pb-3 pt-1">
        <p className="text-[11px] uppercase tracking-wider text-[#a7a7a7] px-2 mb-2">
          Playlist
        </p>
        <ul className="space-y-0.5">
          {playlist.map((t, i) => (
            <li key={i}>
              <button
                type="button"
                className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-md text-left cursor-pointer border-0 transition-colors ${
                  i === current
                    ? "bg-white/10 text-[#1db954]"
                    : "bg-transparent text-white/80 hover:bg-white/5"
                }`}
                onClick={() => play(i)}
              >
                <span className="w-5 text-center text-xs text-[#a7a7a7] shrink-0">
                  {i === current && playing ? (
                    <span className="text-[#1db954]">♫</span>
                  ) : (
                    i + 1
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm truncate">{t.title}</p>
                  <p className="text-[11px] text-[#a7a7a7] truncate">
                    {t.artist}
                  </p>
                </div>
                <span className="text-xs text-[#a7a7a7] shrink-0">
                  {t.duration}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </WindowFrame>
  );
}

export default SpotifyWindow;
