import TeamList from "./components/TeamList";
import Title from "./components/Title";

export default function Page() {
  return (
    <section className="pt-[8.25rem]">
      <div className="max-w-screen-xl mx-auto">
        <Title />
        <TeamList />
      </div>
    </section>
  );
}
