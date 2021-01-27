import CompanyCard from './CompanyCard';

/**
 * CompanyList
 *
 * props:
 * - companies: array of companies like,
 *     [ { handle, name, description, numEmployees, logoUrl }, ...]
 * 
 * state: none
 * 
 * Companies -> CompanyList
 **/

function CompanyList({companies}) {

  return (
    <ul>
      {companies.map(c => 
      <CompanyCard 
        key={c.handle}
        company={c}
      />
      )}
    </ul>
  );
}

export default CompanyList;
