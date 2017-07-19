import initialState from '../initialAppState';

export const POST_COMPANIES = 'app/company/post-companies';
export const UPDATE_COMPANY = 'app/company/update-company';
export const DELETE_COMPANY = 'app/company/delete-company';

export function postCompanies(company) {
  return {
    type: 'POST_COMPANIES',
    payload: company,
  };
}

export function updateCompany(company) {
  return {
    type: 'UPDATE_COMPANY',
    payload: company,
  };
}

export function deleteCompany(companyId) {
  return {
    type: 'DELETE_COMPANY',
    payload: companyId,
  };
}

export default function reducer(state, action) {
  switch (action.type) {
    case POST_COMPANIES:
      return {
        ...state,
        companies: [...state.companies, ...action.payload],
      };
    case DELETE_COMPANY: {
      const companyToDel = [...state.companies];
      const indexToDel = companyToDel.findIndex((company) => company.id === action.payload.id);
      return {
        ...state,
        companies: [...companyToDel.slice(0, indexToDel), ...companyToDel.slice(indexToDel + 1)],
      };
    }
    case UPDATE_COMPANY: {
      const companyToUpdate = [...state.companies];
      const indexToUpdate = companyToUpdate.findIndex(
        (company) => company.id === action.payload.id,
      );
      const dataCompanyToUpdate = {
        ...companyToUpdate[indexToUpdate],
        companyName: action.payload.companyName,
      };
      return {
        ...state,
        companies: [
          ...companyToUpdate.slice(0, indexToUpdate), dataCompanyToUpdate,
          ...companyToUpdate.slice(indexToUpdate + 1),
        ],
      };
    }
    default:
      return state || initialState;
  }
}
