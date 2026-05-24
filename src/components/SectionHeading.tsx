'use client';

export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-start my-16">
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl md:text-2xl font-medium text-gray-400 tracking-wide max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
