import { useRouter } from "next/router";

const UserIndex = () => {
  const { query } = useRouter();

  return <div>this is index page of user known {query.userId}</div>;
};

export default UserIndex;
