import { Link } from 'react-router-dom';

/**
 * CompanyCard
 * NOTE: CompanyCard might be wrapped as a Link to CompanyDetail
 * 
 * props:
 * - handle: string
 * - name: string
 * - description: string
 * - logoUrl: string
 *
 * state: none
 *
 * CompanyList -> CompanyCard
 **/

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link to={`companies/${handle}`}>
      <div>
        <h4>{name}</h4>  
        <p>{description}</p>
        <img src={logoUrl} 
             alt={handle}/>
      </div>
    </Link>
  );
}

export default CompanyCard;