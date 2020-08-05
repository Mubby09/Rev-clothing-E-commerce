import React, { lazy, Suspense } from "react";
import "./App.css";
// import HomePage from "./pages/homepage.component";
import NewHomepage from "../src/pages/new-homepage/new-homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.page";
import Header from "../src/components/Header/header";
import SignInSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "../src/pages/checkout/checkout";
import {
  auth,
  createUserProfileDocument
  // addCollectionsAndDocuments
} from "../src/firebase/firebase-utilities";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user.selector";
import { useSelectCollections } from "../src/redux/shop/shop.selector";
import ErrorBoundary from "../src/components/error-boundary/error-boundary";

// React Lazy
// const ShopPage = lazy(() => import("../src/pages/shop/shop.page"));
// const CheckoutPage = lazy(() => import("../src/pages/checkout/checkout"));
class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //onSnapshot allows us check if a document exists.
        //It also allows us get properties of that data using the .data() method.
        //we actuall do not get any data until we use the .data() method.
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            //W can get the id of the document without using the .data() method.
            id: snapShot.id,
            ...snapShot.data()
          });
          // console.log(this.state.currentUser);
        });
      } else {
        this.props.setCurrentUser(userAuth);
        // addCollectionsAndDocuments(
        //   "collections",
        //   this.props.collectionsArray.map(({ title, items }) => ({
        //     title,
        //     items
        //   }))
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <ErrorBoundary>
            <Route
              exact
              path="/signIn"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/shop" />
                ) : (
                  <SignInSignUp />
                )
              }
            />
            <Route exact path="/" component={NewHomepage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/shop" component={ShopPage} />
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

//Destructuring the 'userReducer' , that is why we have {user}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: useSelectCollections
});

//Getting the 'setCurrentUser' trigger from 'user-action'
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
