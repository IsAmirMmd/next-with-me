import axios from "axios";
import { GetStaticPropsContext } from "next";

//? define type for episode data
interface MovieStatus {
  id: number;
  episode: {
    name: string;
    air_date: string;
    episode: string;
  };
}

//? get episode from ssr in dynamic route
const Episode = ({ episode }: MovieStatus) => {
  return (
    <div className="absolute w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-950 rounded-lg">
      <p>episode : {episode.episode}</p>
      <p>name : {episode.name}</p>
      <p>date : {episode.air_date}</p>
    </div>
  );
};

export default Episode;

//! we use getStaticPaths in [this].tsx format
export async function getStaticPaths() {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);
  const paths = data.results.map((item: MovieStatus) => {
    return {
      params: { id: `${item.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

//^ use this as we have in past commit for getting data in serverside(ssr)
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params?.id}`
  );

  return {
    props: {
      episode: data,
    },
  };
}
