import Link from "next/link";
import Repo from "@/app/component/Repo";
import RepoDirs from "@/app/component/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      {/*! <h2>{name}</h2>
      <p>Repo Details</p> */}
      <Link href="/code/repos" className="btn btn-back">
        {" "}
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo.....</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories.....</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
