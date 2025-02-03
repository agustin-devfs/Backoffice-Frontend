import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
//users
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
// title y links
import NavList from "./components/NavList";
import NavCreate from "./components/NavCreate";
import NavEdit from "./components/NavEdit";

//cards
import CardList from "./components/CardsList";
import CardCreate from "./components/CardsCreate";
import CardEdit from "./components/CardsEdit";

//testimonials
import TestimonialList from "./components/TestimonialList";
import TestimonialCreate from "./components/TestimonialsCreate";
import TestimonialEdit from "./components/TestimonialsEdit";
//hero
import HeroList from "./components/HeroList";
import HeroEdit from "./components/HeroEdit";
import HeroCreate from "./components/HeroCreate";
//products
import ProductsList from "./components/ProductsList";
import ProductsCreate from "./components/ProductsCreate";
import ProductsEdit from "./components/ProductsEdit";
//cart

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* Users */}
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    /> 

    {/* Nav */}
    <Resource name="nav" list={NavList} create={NavCreate} edit={NavEdit} />
    {/* Hero */}
    <Resource name="hero" list={HeroList} create={HeroCreate} edit={HeroEdit} />
  
    {/* Cards */}
    <Resource
      name="cards"
      list={CardList}
      create={CardCreate}
      edit={CardEdit}
    />
    {/* Testimonials */}
    <Resource
      name="testimonials"
      list={TestimonialList}
      create={TestimonialCreate}
      edit={TestimonialEdit}
    />
    <Resource
      name="Products"
      list={ProductsList}
      create={ProductsCreate}
      edit={ProductsEdit}
    />

  </Admin>
);

export default App;
