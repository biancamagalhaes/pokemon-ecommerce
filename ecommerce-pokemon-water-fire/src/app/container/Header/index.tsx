import React, { useState } from "react";
import {
  Container,
  Search,
  Logo,
  MarketPlace,
  ContainerLogoSearch,
  InputSearch,
  CloseButton,
  LabelMiddle,
  CircleItems,
  NumberItems,
} from "./style";
import { getOpenCart, actions } from "app/ducks/pokemons";
import { connect } from "react-redux";
import Buy from "app/svg/buy";
import Pokemon from "app/svg/pokemon";
import IconSearch from "app/svg/search";

function Header(props) {
  const [textSearch, setTextSearch] = useState("");
  return (
    <Container>
      <ContainerLogoSearch>
        <Logo>
          <Pokemon width={150} height={67} />
        </Logo>
        <Search>
          <InputSearch
            placeholder={"Busque aqui seu pokémon"}
            onChange={(event) => setTextSearch(event.target.value)}
            value={textSearch}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                props.searchProduct(textSearch);
              }
            }}
          />
          {textSearch !== "" ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CloseButton
                onClick={() => {
                  setTextSearch("");
                  props.searchProduct("");
                }}
              >
                X
              </CloseButton>
              <LabelMiddle>|</LabelMiddle>
            </div>
          ) : null}
          <div style={{ cursor: "pointer" }}>
            <IconSearch
              height={30}
              width={30}
              onClick={() => props.searchProduct(textSearch)}
            />
          </div>
        </Search>
      </ContainerLogoSearch>
      <MarketPlace onClick={() => props.openCart()}>
        <Buy height={30} />
        {props.numberItems > 0 ? (
          <CircleItems>
            <NumberItems>{props.numberItems}</NumberItems>
          </CircleItems>
        ) : null}
      </MarketPlace>
    </Container>
  );
}

export default connect(getOpenCart, (dispatch: any) => ({
  openCart: () => dispatch(actions.openCart()),
  searchProduct: (text) => dispatch(actions.searchProduct(text)),
}))(Header);
