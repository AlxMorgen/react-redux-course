const defaultState = {
  customer: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customer: [...state.customer, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customer: [...state.customer, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customer: state.customer.filter(
          (custumer) => custumer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
export const addManyCustomers = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
