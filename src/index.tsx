import App from "./components/App/App";
import "./index.css";
import { createRoot } from "react-dom/client";
// import agent from 'skywalking-backend-js';
// import agent from 'skywalking-backend-js';
// @feature: nodejs-agent-frontend;
// @ts-ignore
import ClientMonitor from 'skywalking-client-js';


// agent.start({
//   serviceName: 'ac-test::chattella-app-fe',
//   serviceInstance: 'chattella-app-fe-instance',
//   collectorAddress: 'localhost:11800',
// });

ClientMonitor.register({
  collector: 'http://127.0.0.1:12800', 
  service: 'ac-test::test-ui',
  pagePath: '/',
  serviceVersion: 'v1.0.0',
});


const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));
