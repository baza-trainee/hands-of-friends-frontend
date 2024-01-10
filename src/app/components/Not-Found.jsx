import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-body text-center">
      <h2 className="text-[16rem] font-bold leading-[1.2] tracking-[0.32rem] text-deepBlue">
        404
      </h2>
      <p className="text-[2rem] mb-[4.5rem]">
        Вибачте, сторінка, яку ви шукаєте, переміщена або видалена.
      </p>
      <p className="inline-block p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet">
        <Link href="/">Повернутися на головну</Link>
      </p>
    </div>
  );
}
