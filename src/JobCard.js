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
 **/

function JobCard({companyName, title, salary, equity  }) {
  // Helper function to determine whether to include company name

  function companyNameTag() {
    if (companyName) {
      return <p>{companyName}</p>;
    }
    return null;
  }

  return (
    <div className="JobCard">
      <h4>{title}</h4>
      {companyNameTag()}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
