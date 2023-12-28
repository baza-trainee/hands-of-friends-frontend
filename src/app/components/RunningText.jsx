import Link from "next/link";
import Marquee from "react-fast-marquee";

const RunningText = () => {
  return (
    <Marquee autoFill={true} speed={40} pauseOnHover={true}>
      <div className="flex text-2xl gap-x-10 mx-5 py-4">
        <Link href="/">Разом до перемоги</Link>
        <Link href="/">Допомога</Link>
        <Link href="/">Підтримка</Link>
        <Link href="/">Руки друзів </Link>
      </div>
    </Marquee>
  );
};

export default RunningText;
