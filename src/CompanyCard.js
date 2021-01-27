/**
 * CompanyCard
 * NOTE:CompanyCard might be wrapped as a Link to CompanyDetail
 * 
 * props:
 * - company: obj like,
 *     { handle, name, description, numEmployees, logoUrl }
 *
 * state: none
 *
 * CompanyList -> CompanyCard
 **/

function CompanyCard({ company }) {
  return (
    <div>
      <h4>{company.name}</h4>  
      <p>{company.description}</p>
      <img src={company.logoUrl} alt={company.handle}/>
    </div>
  );
}

export default CompanyCard;