import React from "react";
import "./App.css";
// import HomePage from "./pages/homepage.component";
import NewHomepage from "../src/pages/new-homepage/new-homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.page";
import Header from "../src/components/Header/header";
import SignInSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ContactPage from "../src/pages/contact-page/contact-page";
import CheckoutPage from "../src/pages/checkout/checkout";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase-utilities";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user.selector";

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
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/" component={NewHomepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact-page" component={ContactPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

//Destructuring the 'userReducer' , that is why we have {user}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

//Getting the 'setCurrentUser' trigger from 'user-action'
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
