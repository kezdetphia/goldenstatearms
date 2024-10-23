export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10">
      {/* // <section className="flex   justify-center gap-4 py-8 md:py-10"> */}
      <div className="inline-block  text-center justify-center">{children}</div>
    </section>
  );
}
