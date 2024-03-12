import ResumeButton from "@/app/components/Buttons/ResumeButton";

export default function Home() {
  return (
    <main className="w-full flex flex-wrap px-10 py-20">
      <div className="w-1/2">
        <div>
          <h1 className="text-white text-8xl font-extrabold">James</h1>
          <h1 className="text-slate-600 text-8xl font-extrabold">Mwendwa</h1>
        </div>

        <p className="text-2xl mt-10 text-orange-400 font-semibold">
          FULLSTACK DEVELOPER
        </p>

        <ResumeButton />
      </div>
    </main>
  );
}
