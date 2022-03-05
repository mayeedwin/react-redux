
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "./redux";
test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
