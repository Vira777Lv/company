import * as Constants from '../../constants/companyConstants';

export function POST_COMPANIES(list) {
  return {
    type: Constants.POST_COMPANIES,
    payload: list
  }
}
export function UPDATE_COMPANY(company) {
  return {
    type: Constants.UPDATE_COMPANY,
    payload: company
  }
}
export function DELETE_COMPANY(id) {
  return {
    type: Constants.DELETE_COMPANY,
    payload: id
  }
}
