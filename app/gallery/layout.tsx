export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* // <section className="flex   justify-center gap-4 py-8 md:py-10"> */}
      <div className="inline-block  w-full    justify-center">{children}</div>
    </section>
  );
}
