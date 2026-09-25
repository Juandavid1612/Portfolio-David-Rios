import PlaceholderArt from "./PlaceholderArt";
import { PlayIcon } from "./Icons";

export default function VideoPlaceholder({ accent, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <PlaceholderArt accent={accent} seed={9} label="Gameplay video" className="aspect-video w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-ink/70 border border-paper/30 flex items-center justify-center text-paper">
          <PlayIcon className="w-6 h-6 ml-0.5" />
        </span>
      </div>
    </div>
  );
}
