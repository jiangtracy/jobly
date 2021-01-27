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
 * 
 *  Routes -> Jobs
 **/

function Jobs() {
  const [jobs, setJobs] = useState([]);

  /** When component mounts, get all jobs from API */

  useEffect(function getJobs() {
    async function _getJobs() {
      const jobs = await JoblyApi.getJobs("");
      setJobs(jobs);
    }

    _getJobs();
  }, []);

  /** Updates the list of jobs when search is made */

  async function updateJobs(searchTerm) {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  }

  return (
    <div>
      <SearchForm updateList={updateJobs} />
      <JobCardList jobs={jobs} isCompanyDetail={false} />
    </div>
  );
}

export default Jobs;