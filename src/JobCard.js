/**
 * JobCard
 *
 * props:
 * - job: obj like,
 *     { id, title, salary, equity, (company OR (companyHandle, companyName)) }
 * - isCompanyDetail: boolean to show company name
 *
 * state: none
 *
 * JobCardList -> JobCard
 * TODO: pass destructured variables down
 **/

function JobCard({ job, isCompanyDetail }) {
  // Helper function to determine whether to include company name

  function companyNameTag() {
    if (isCompanyDetail === false) {
      return <p>{job.companyName}</p>;
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
  );
}

export default JobCard;
