import axios from "axios";
import useSWR from "swr";

const ProfileSWR = () => {
  const { data, error } = useSWR("getUserData", async () => {
    const { data } = await axios.get("http://localhost:4000/profile");
    return data;
  });

  if (error) return <p>faild to load</p>;
  if (!data) return <p>loading...</p>;

  return (
    <div>
      <h1>Profile Page Using SWR</h1>
      <p>id : {data.id}</p>
      <p>name : {data.name}</p>
    </div>
  );
};

export default ProfileSWR;
