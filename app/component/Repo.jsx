import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/Ragib-Rohan/${name}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const repo = await response.json();
  // console.log(response);
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
