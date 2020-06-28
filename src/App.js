import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.page";
import Header from "../src/components/Header/header";
import SignInSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {
  auth,
  createUserProfileDocument
} from "../src/firebase/firebase-utilities";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //onSnapshot allows us check if a document exists.
        //It also allows us get properties of that data using the .data() method.
        //we actuall do not get any data until we use the .data() method.
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              //W can get the id of the document without using the .data() method.
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state.currentUser);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/signIn" component={SignInSignUp} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
