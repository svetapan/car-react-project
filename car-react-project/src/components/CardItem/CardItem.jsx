import React from "react";
import {
  Card,
  CardImg,
  List,
  ListUl,
  ListItem,
  CardDescription,
  CardPrice,
  CardTitle,
  MarkedText,
  StyledHeart,
  HeartButton,
} from "./CardItem.styled";
import { Button } from "../Button/Button";

const CardItem = ({ advert, favorites, handleHeartClick }) => {
  const {
    id,
    year,
    make,
    model,
    rentalPrice,
    img,
    type,
    functionalities,
    address,
    rentalCompany,
  } = advert;

  return (
    <Card key={id}>
      <HeartButton onClick={() => handleHeartClick(id)}>
        <StyledHeart
          $isFavorite={favorites.some((favorite) => favorite.id === id)}
        />
      </HeartButton>
      <CardImg src={img} alt={model} />
      <CardDescription>
        <CardPrice>{rentalPrice}</CardPrice>
        <CardTitle>
          {make} <MarkedText>{model},</MarkedText> {year}
        </CardTitle>
        <List>
          <ListUl>
            <ListItem>{address.split(" ")[4]}</ListItem>
            <ListItem>{address.split(",")[1]}</ListItem>
            <ListItem>{rentalCompany}</ListItem>
            <ListItem>{type}</ListItem>
            <ListItem>{model}</ListItem>
            <ListItem>{id}</ListItem>
            <ListItem>{functionalities[0]}</ListItem>
          </ListUl>
        </List>
      </CardDescription>
      <Button>Lern More</Button>
    </Card>
  );
};

export default CardItem;
