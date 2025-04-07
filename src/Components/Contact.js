import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [mainData, setMainData] = useState([]);
  console.log(mainData);

  useEffect(() => {
    console.log("use effect running....");

    const dataFetching = async () => {
      console.log("fun call....");

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data) {
        // console.log(data);
        setMainData(data);
      }
    };

    dataFetching();
  }, []);

  return (
    <div>
      Contact Page
      <div>
        {mainData?.map(({ id, title }) => {
          return (
            <Link to={`/contact/${id}`} key={id}>
              <div>
                <h3>{title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
