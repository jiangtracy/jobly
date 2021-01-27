import JoblyApi from './api';
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import CompanyList from './CompanyList';

/**
 * Companies
 *
 * props:
 * - none
 *
 * state:
 * - an array of companies like [ { handle, name, description, numEmployees, logoUrl }, ...]
 *
 * App -> Routes -> Companies
 * TODO: Add a loading state here and in CompanyDetail/Jobs
 **/

function Companies() {
	const [ companies, setCompanies ] = useState([]);

	/** When component mounts, get all the companies from API */

	useEffect(function getAllCompanies() {
		async function _getAllCompanies() {
			const companies = await JoblyApi.getCompanies('');
			setCompanies(companies);
		}

		_getAllCompanies();
	}, []);

	/** Updates the list of companies when search is made */

	async function updateCompanies(searchTerm) {
		const companies = await JoblyApi.getCompanies(searchTerm);
		setCompanies(companies);
	}

	return (
		<div>
			<SearchForm updateList={updateCompanies} />
			<CompanyList companies={companies} />
		</div>
	);
}

export default Companies;
