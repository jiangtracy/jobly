import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from "./api";

/**
 * CompanyDetail
 * 
 * props:
 *  - currentUser: obj like 
 *     { username, firstName, lastName, email, isAdmin, jobs }
 * 
 * state:
 * -company: an object like { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 * - isLoading: boolean, indicates if any data is being loaded
 * - handle: string, company handle
 * 
 * App -> Routes -> CompanyDetail 
 *
 **/

function CompanyDetail({ currentUser }) {
  const [isLoading, setIsLoading] = useState(true);
	const [ company, setCompany ] = useState(null);
	const { handle } = useParams();

	/** When component mounts, get company detail from API */

	useEffect(function getCompanyDetail() {
		async function _getCompanyDetail() {
			const company = await JoblyApi.getCompany(handle);
			setCompany(company);
			setIsLoading(false);
		}

		_getCompanyDetail();
	}, []);

  if (isLoading) return <div>Loading...</div>;
	
  return company && (
    <div className="CompanyDetail">
      <h2 className="CompanyDetail-title">{company.name}</h2>
      <p className="CompanyDetail-desc">{company.description}</p>
      <JobCardList jobs={company.jobs}  />
    </div>
  )
  
                                 
}

export default CompanyDetail;
