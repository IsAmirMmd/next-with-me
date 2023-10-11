import axios from "axios";

interface MovieIndexProps {
  movieList: {
    results: MovieStatus[];
  };
}

interface MovieStatus {
  id: number;
  episode: string;
  name: string;
}

const MovieIndex = ({ movieList }: MovieIndexProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pb-4">
      <p className="text-lg font-bold text-center mb-4 mt-2">
        Movie List Season 1
      </p>
      <section className="bg-slate-950 p-4 rounded-lg">
        {movieList.results.map((item: MovieStatus) => {
          return (
            <div key={item.id} className="flex gap-2 items-center">
              <p className="pb-2 border-b border-slate-300 w-full pt-3">
                episode : {item.episode} - name : {item.name}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MovieIndex;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      movieList: data,
    },
  };
}
