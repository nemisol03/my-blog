import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import { Fragment } from "react";
import { AuthProvider } from "~/contexts/authContext";
function App() {
    return <Router>
     <AuthProvider >
         <Routes>
            {publicRoutes.map((route,index) => {
               const Layout = route.layout === null ? Fragment : DefaultLayout
               const Page = route.component
   
               return <Route key={index} path={route.path} element= {
                  <Layout>
                     <Page/>
                  </Layout>
               } />;
            })}
         </Routes>
     </AuthProvider>
    </Router>;
}

export default App;
