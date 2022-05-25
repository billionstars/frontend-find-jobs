import React, { useContext, useEffect, useState } from "react";
import { MainTitle } from "../components/MainTitle";
import { Link } from "react-router-dom";

import { getWithToken } from "../api";
import { AuthContext } from "../context/AuthContext";

import { InfoForRegistered } from "../components/InfoForRegistered";

const Jobs = () => {
  const { auth } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    const token = localStorage.getItem("token");

    if (token) {
      getWithToken("/api/jobs")
        .then(({ data }) => {
          // console.log("Get Array Jobs ", data);
          if (data.failed) {
            console.log("Get Jobs Error 2", data);
          } else {
            setJobs(data);
          }
        })
        .catch((error) => console.log("Catch Recovery Error: ", error));
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <MainTitle title="Jobs" />
      <section className="w-full min-h-screen p-4 flex flex-col justify-center items-center bg-azul/10 overflow-y-auto">
        {!auth.logged && <InfoForRegistered />}
        <ol>
          {auth.logged &&
            jobs.map((job) => {
              return (
                <li
                  key={job._id}
                  className="w-full p-4 my-2 rounded-lg bg-morado/40 hover:bg-morado/50"
                >
                  <div className="my-3">
                    <h4>Description: {job.description}</h4>
                    <pre>Category: {JSON.stringify(job.category, null, 2)}</pre>
                    <p>Salary: {job.salary}</p>
                  </div>
                  <div className="w-full flex">
                    <Link
                      className="px-4 py-2 rounded-md bg-azul/40 hover:bg-azul/60 hover:shadow-md"
                      to={`/jobs/${job._id}`}
                    >
                      View
                    </Link>
                  </div>
                </li>
              );
            })}
        </ol>
      </section>
    </>
  );
};

export default Jobs;

{
  /* <pre>{JSON.stringify(auth, null, 2)}</pre> */
}
