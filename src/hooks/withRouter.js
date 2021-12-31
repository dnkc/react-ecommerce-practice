import { useLocation, useNavigate, useParams } from "react-router-dom";

function WithRouter(Child) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Child {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouter;
