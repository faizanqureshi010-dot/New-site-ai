const items = [
  'Claravox Healthcare',
  'HIPAA Compliant',
  'SOC 2 Type II',
  'PIPEDA',
  'Dentrix',
  'Open Dental',
  'Oryx',
];

export default function TrustMarquee() {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-panel py-4" aria-hidden="true">
      <div
        className="flex w-max gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        {track.map((label, i) => (
          <span key={i} className="font-mono-label text-xs text-slate">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
