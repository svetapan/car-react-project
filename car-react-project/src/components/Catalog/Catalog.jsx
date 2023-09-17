import React, { useEffect, useState } from "react";
import { gethAdvertsFromMockAPI } from "../../store/gethAdvertsFromMockAPI";
import { CardsGroup } from "./Catalog.styled";

import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, toggleFavorite } from "../../store/store";
import CardItem from "../CardItem/CardItem";
import { ButtonLink } from "../Button/Button";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleCardCount, setVisibleCardCount] = useState(8);

  const cards = useSelector((state) => state.cards.cards);
  const favorites = useSelector((state) => state.cards.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAdverts() {
      try {
        const res = await gethAdvertsFromMockAPI();
        setAdverts(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAdverts();
  }, []);

  function getCardById(id) {
    return adverts.find((card) => card.id === id);
  }

  const handleHeartClick = (id) => {
    const index = favorites.indexOf(id);

    const favCard = getCardById(id);

    if (index === -1) {
      dispatch(toggleFavorite(favCard));
    } else {
      dispatch(toggleFavorite(favCard));
    }
  };

  const loadMoreCards = () => {
    if (visibleCardCount <= adverts.length) {
      setVisibleCardCount(visibleCardCount + 8);
    }
  };

  return (
    <section>
      <CardsGroup>
        {adverts.slice(0, visibleCardCount).map((advert) => {
          return (
            <CardItem
              key={advert.id}
              advert={advert}
              favorites={favorites}
              handleHeartClick={handleHeartClick}
            />
          );
        })}
      </CardsGroup>
      {visibleCardCount <= adverts.length && (
        <ButtonLink onClick={loadMoreCards}>Load more</ButtonLink>
      )}
    </section>
  );
};

export default Catalog;
