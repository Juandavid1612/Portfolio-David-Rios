import PlaceholderArt from "./PlaceholderArt";

export default function ScreenshotGrid({ accent, count = 4 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <PlaceholderArt
          key={i}
          accent={accent}
          seed={i + 2}
          label={`Screenshot ${i + 1}`}
          className="aspect-video"
        />
      ))}
    </div>
  );
}
