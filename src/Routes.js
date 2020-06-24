import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {PrivateRouteWithLayout} from './components';
import {RouteWithLayout} from './components';
import {Main as MainLayout, Minimal as MinimalLayout} from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Brands as BrandsListView,
  Products as ProductsView,
  Product as ProductView,
  Account as AccountView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from './views';

const Routes = props => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />

      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />

      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <PrivateRouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <PrivateRouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <PrivateRouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />

      <PrivateRouteWithLayout
        component={ProductView}
        exact
        layout={MainLayout}
        path="/productswip/:id"
      />
      <PrivateRouteWithLayout
        component={ProductsView}
        exact
        layout={MainLayout}
        path="/productswip"
      />

      <PrivateRouteWithLayout
        component={BrandsListView}
        exact
        layout={MainLayout}
        path="/brands"
      />
      <PrivateRouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      {/* <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      /> */}

      
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
