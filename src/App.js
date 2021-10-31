import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Header from './Component/Header/Header';
import AddBookings from './Component/AddBookings/AddBookings';
import BookingDetails from './Component/BookingDetails/BookingDetails'
import MyBooking from './Component/MyBooking/MyBooking';
import ManageAllOrder from './Component/ManageAllOrder/ManageAllOrder';
import NotFound from './Component/NotFound/NotFound'




function App() {
  return (
    <div >

      {/* AUTH Provider Declear */}
      <AuthProvider>
        {/* BrowserRouter Start */}
        <BrowserRouter>
          {/* Navbar Component */}
          <Header></Header>
          <Switch>
            {/* Home PAGE */}
            <Route path='/home'>
              <Home></Home>
            </Route>
            {/* ABOUT PAGE */}
            <Route path='/about'>
              <About></About>
            </Route>
            {/* PrivateRoute MyBooking */}
            <PrivateRoute path='/myBooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            {/* PrivateRoute MybookingDetails */}
            <PrivateRoute path='/bookingDetails/:id'>
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            {/* PrivateRoute AddBookings */}
            <PrivateRoute path='/addBookings'>
              <AddBookings></AddBookings>
            </PrivateRoute>
            {/* PrivateRoute ALL Orders */}
            <PrivateRoute path='/allOrders'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            {/* LogIn Page */}
            <Route path='/login'>
              <Login></Login>
            </Route>
            {/* Home Page */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            {/* 404 Page */}
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* Footer Page */}
          <Footer></Footer>
        </BrowserRouter>
        {/* BrowserRouter END */}
      </AuthProvider>

    </div>
  );
}

export default App;
