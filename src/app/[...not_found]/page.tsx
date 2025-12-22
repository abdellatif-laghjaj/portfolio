export const metadata = {
  title: "Page Not Found",
  description: "This page does not exist. Please check the URL and try again.",
};

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Page Not Found
      </h1>
    </section>
  );
}
