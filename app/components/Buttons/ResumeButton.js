import { MdArrowOutward } from "react-icons/md";

export default function ResumeButton() {
  return (
    <div className="bg-white w-28 px-4 py-2 grid place-items-center font-sans font-medium mt-5 rounded-md">
      <button className="text-base flex items-center justify-between">
        <p>Resume</p>
        <MdArrowOutward className="ml-3" />
      </button>
    </div>
  );
}
