import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

/**
 * Jobs
 *
 * props: 
 * - none
 * 
 * state: 
 * - an array of jobs like 
 *    [{ id, title, salary, equity, companyHandle, companyName } ...]
 * - isLoading: boolean, indicates if any data is being loaded
 * 
 *  Routes -> Jobs
 **/

function Jobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  /** When component mounts, get all jobs from API */

  useEffect(function getJobs() {
    async function _getJobs() {
      const jobs = await JoblyApi.getJobs("");
      setJobs(jobs);
      setIsLoading(false);
    }

    _getJobs();
  }, []);

  /** Updates the list of jobs when search is made */

  async function updateJobs(searchTerm) {
    setIsLoading(true);
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
    setIsLoading(false);

  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm updateList={updateJobs} />
      <JobCardList jobs={jobs} isCompanyDetail={false} />
    </div>
  );
}

export default Jobs;