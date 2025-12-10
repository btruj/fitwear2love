// components/ui/SectionDivider.tsx
export default function SectionDivider() {
  return (
    <div className="relative my-6 md:my-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-300/60 to-transparent" />
      </div>
    </div>
  );
}