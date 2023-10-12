import axios from "axios";
import { useEffect, useState } from "react";

interface DataType {
  name: string | "temp";
  id: number | 111111;
}

const ProfilePage = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (loading) return <p>loading..</p>;

  return (
    <div>
      profile page for user : {data?.id}
      <p>name : {data?.name}</p>
    </div>
  );
};

export default ProfilePage;
