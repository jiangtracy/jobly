import JobCard from "./JobCard";

/**
 * JobCardList
 * 
 * props:
 * - jobs: am array like,
 *     [{ id, title, salary, equity, company },...]
 *
 * state: none
 *
 * CompanyDetail -> JobCardlist -> JobCard
 **/

function JobCardList({ jobs, isCompanyDetail }) {
  console.log("jobs", jobs);
  //Helper function to generate jobs tags
  function generateJobsTags() {
    return jobs.map( job => {
            return <JobCard job={job} 
                    isCompanyDetail={isCompanyDetail}
                    key={job.id}/>
    })
  }
  

  return (
    <ul className="JobCardList">
      { generateJobsTags()}
    </ul>
  )
}

export default JobCardList;