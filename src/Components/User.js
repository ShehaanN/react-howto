import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [data, setdata] = useState({});
  const { id } = useParams();
  console.log(id);
  console.log(data);

  useEffect(() => {
    console.log("use effect running..");
    const getData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const data = await res.json();
      if (data) {
        setdata(data);
      }
    };

    getData();

    return () => {
      console.log("useEffect cleand");

      getData();
    };
  }, [id]);

  return (
    <div>
      Users Page
      {data ? (
        <div>
          <h2> {data.title} </h2>
          <p>{data.body}</p>
        </div>
      ) : null}
      <Link to="/contact">Back</Link>
    </div>
  );
};

export default User;
