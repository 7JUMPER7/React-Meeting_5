import { Route, Switch } from "react-router";
import Noteboks from "./Notebooks";
import Phones from "./Phones";

export default function Products() {
    return(
        <>
        <h2>Our products</h2>
        <Switch>
            <Route path="/products/phones" component={Phones}></Route>
            <Route path="/products/notebooks" component={Noteboks}></Route>
        </Switch>
        </>
    );
}