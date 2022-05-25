import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getWithToken } from "../api";

const Offert = () => {
  const { jobId } = useParams();
  const [jobById, setJobById] = useState({});
  const token = localStorage.getItem("token");

  const getJobById = (job) => {
    if (token) {
      getWithToken(`/api/jobs/${job}`)
        .then(({ data }) => {
          //   console.log("Get a Job ", data["title"]);
          if (data.failed) {
            console.log("Get a Jobs Error", data);
          } else {
            setJobById(data);
          }
        })
        .catch((error) => console.log("Catch Recovery Error: ", error));
    }
  };

  useEffect(() => {
    getJobById(jobId);
  }, []);

  return (
    <section className="w-full p-4 bg-rosa/20 rounded-lg">
      <h3 className="w-full text-center py-4 my-2 text-2xl bg-rosa/20 rounded-md ">
        {jobById["title"]}
      </h3>
      <pre className="w-full p-4 my-4 bg-morado/10 rounded-xl overflow-x-auto">
        Job: {JSON.stringify(jobById, null, 2)}
      </pre>
      <div className="w-full flex justify-between">
        <Link
          className="px-4 py-2 rounded-md bg-azul/40 hover:bg-azul/60 hover:shadow-md"
          to="/jobs"
        >
          Return
        </Link>
        <button className="px-4 py-2 rounded-md bg-rosa/90 hover:bg-rosa hover:shadow-md hover:text-white">
          Apply
        </button>
      </div>
    </section>
  );
};

export { Offert };
