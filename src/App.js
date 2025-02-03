import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
//users
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
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

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource name="hero" list={HeroList} create={HeroCreate} edit={HeroEdit} />
  
    <Resource
      name="cards"
      list={CardList}
      create={CardCreate}
      edit={CardEdit}
    />
    <Resource
      name="testimonials"
      list={TestimonialList}
      create={TestimonialCreate}
      edit={TestimonialEdit}
    />
  </Admin>
);

export default App;
