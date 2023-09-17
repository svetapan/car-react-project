import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/store";
import CardItem from "../CardItem/CardItem";
import { CardsGroup } from "../CardItem/CardItem.styled";
import { Sidebar } from "./Favorite.styled";

const Favorite = () => {
  const favorites = useSelector((state) => state.cards.favorites);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  function getCardById(id) {
    return favorites.find((favorite) => favorite.id === id);
  }

  const handleHeartClick = (id) => {
    // const index = favorites.indexOf(id);
    const index = favorites.findIndex((favorite) => favorite.id === id);

    if (index === -1) {
      const favCard = getCardById(id);
      dispatch(toggleFavorite(favCard));
    }
  };

  console.log(favorites);
  return (
    <section>
      <CardsGroup>
        <Sidebar>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          porro ut at! At est unde ullam libero, voluptatem laboriosam dolorum.
        </Sidebar>
        {favorites.map((favorite) => (
          <CardItem
            key={favorite.id}
            advert={favorite}
            favorites={favorites}
            handleHeartClick={handleHeartClick}
          />
        ))}
      </CardsGroup>
    </section>
  );
};

export default Favorite;
