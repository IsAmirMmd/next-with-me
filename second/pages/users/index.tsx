import axios from "axios";

interface UserIndexProps {
  userList: {
    results: CharacterStatus[];
  };
}

interface CharacterStatus {
  id: number;
  name: string;
  status: "Alive" | "Dead";
}

const UserIndex = ({ userList }: UserIndexProps) => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <p className="text-lg font-bold text-center mb-4 mt-2">
        this is user index page
      </p>
      <section className="bg-slate-950 p-4 rounded-lg">
        {userList.results.map((item: CharacterStatus) => {
          return (
            <div key={item.id} className="flex gap-2 items-center">
              <p>name : {item.name}</p>-<p>status : {item.status}</p>
              <span
                className={`block w-3 h-3 rounded-full ${   
                  item.status === "Alive" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default UserIndex;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      userList: data,
    },
  };
}
