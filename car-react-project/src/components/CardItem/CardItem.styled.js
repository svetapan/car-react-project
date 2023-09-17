import styled from "styled-components";
import { Heart } from "../../UI/icons";

export const CardsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1/ 0.978;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
  background: #000;
`;

export const CardTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
  margin: 0 0 8px;
  gap: 4px;
`;

export const MarkedText = styled.span`
  color: #3470ff;
`;

export const CardPrice = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  float: right;
`;
export const CardDescription = styled.div`
  flex: 1;
  margin-bottom: 28px;
`;

export const List = styled.div`
  overflow: hidden;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -7px;
  font-size: 12px;
  color: rgba(18 20 23 / 0.5);
`;

export const Element = styled.span`
  color: #121417;
`;

export const ListItem = styled.li`
  border-left: solid 1px rgba(18 20 23 / 0.1);
  padding: 0 6px;
  margin-bottom: 4px;

  &:last-child {
    border-right: 0;
    padding-right: 0;
  }
`;

export const StyledHeart = styled(Heart)`
  fill: transparent;
  transition: all 0.3s ease;
  stroke: #fff;
  fill: ${(props) => (props.$isFavorite ? "#3470ff" : "transparent")};
  stroke: ${(props) => (props.$isFavorite ? "#3470ff" : "#fff")};

  &:hover {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
