import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const nativeDefine = customElements.define.bind(customElements);

customElements.define = function (
  name: string,
  constructor: CustomElementConstructor,
  options?: ElementDefinitionOptions,
) {
  if (!customElements.get(name)) {
    nativeDefine(name, constructor, options);
  }
} as typeof customElements.define;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
