import { useRouter } from "next/router";

const ReviewId = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <p>the review id : {query.reviewId}</p>
      <p>the user id : {query.userId}</p>
    </div>
  );
};

export default ReviewId;
