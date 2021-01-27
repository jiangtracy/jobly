/**
 * JobCard
 * 
 * props:
 * - job: obj like,
 *     { id, title, salary, equity, company }
 * - isCompanyDetail: boolean
 *
 * state: none
 *
 * JobCardList -> JobCard
 **/

 function JobCard({job, isCompanyDetail}) {

  // Helper function to determine whether to include company name 

  function companyNameTag() {
    if(isCompanyDetail === false){
      return <p>{job.company}</p>
    }
    return null;
  }
  
  
    return (
      <div className="JobCard">
        <h4>{job.title}</h4>
        {companyNameTag()}
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
     </div>
  )
 }

 export default JobCard;