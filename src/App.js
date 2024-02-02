import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import { Fragment } from "react";
import AdminLayout from "./components/Layouts/AdminLayout";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
function App() {
    return <Router>
     <Provider store={store} >
         <Routes>
            {publicRoutes.map((route,index) => {
               let Layout = route.layout === null ? Fragment : DefaultLayout

               if(route?.meta?.permissions === 'ADMIN') {
                  Layout = AdminLayout
               }
               const Page = route.component


               return <Route key={index} path={route.path} element= {
                  <Layout>
                     <Page/>
                  </Layout>
               } />;
            })}
         </Routes>
     </Provider>
    </Router>;
}

export default App;
