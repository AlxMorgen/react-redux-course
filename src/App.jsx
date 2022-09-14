import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";

import {addCustomerAction, removeCustomerAction} from "./store/customerReducer"

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customer);
  console.log(customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer =(customer) => {
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
      <div className="cash-visible">Баланс: {cash} $</div>
      <div className="cash-actions-btn">
        <button
          className="action-btn"
          onClick={() => getCash(Number(prompt()))}
        >
          Снять деньги
        </button>
        <button
          className="action-btn"
          onClick={() => addCash(Number(prompt()))}
        >
          Положить деньги
        </button>
      </div>
      <div className="cash-actions-btn">
        <button className="action-btn" onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </button>
        
      </div>
      <div className="cash-actions-btn">
        <button className="action-btn" onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
        
      </div>

      <div className="customers">
        {customers !== 0 ? (
          <div>
            {customers.map((el, index) => (
              <div
                onClick={() => removeCustomer(el)}
                className="customers_item"
                key={el.id}
              >
                {index + 1}. {el.name}
              </div>
            ))}
          </div>
        ) : (
          <h3>Клиенты отсутствуют</h3>
        )}
      </div>
    </div>
  );
}

export default App;
