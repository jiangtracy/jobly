import JobCard from "./JobCard";

/**
 * JobCardList
 * 
 * props:
 * - jobs: if passed from CompanyDetail, an array like,
 *        [{ id, title, salary, equity, company },...]
 *        -if jobs is passed from Jobs component, array has:
 *       [ { id, title, salary, equity, companyHandle, companyName }, ...] }
 * - isCompanyDetail: boolean, decide whether to show company name 
 *
 * state: none
 *
 * CompanyDetail -> JobCardlist -> JobCard
 **/

function JobCardList({ jobs, isCompanyDetail }) {

  /** Helper function to generate jobs tags */

  function generateJobsTags() {
    return jobs.map((job) => {
      return (
        <JobCard job={job} isCompanyDetail={isCompanyDetail} key={job.id} />
      );
    });
  }

  return <ul className="JobCardList">{generateJobsTags()}</ul>;
}

export default JobCardList;