import React, { useState } from "react";
import {
  Container,
  ContentTop,
  FilterText,
  ButtonOK,
  ContainerFilters,
  Checkbox,
  Label,
  LabelRemoveFilter,
  ContainerRemoveFilter,
} from "./style";
import { connect } from "react-redux";
import { filterProducts, getProducts } from "app/ducks/pokemons";

function Filter(props) {
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <Container>
      <ContentTop>
        <FilterText>Filtros</FilterText>
        <ButtonOK
          type={"submit"}
          onClick={() => props.filterProducts(typeFilter)}
        >
          OK
        </ButtonOK>
      </ContentTop>

      <ContainerFilters>
        <Checkbox
          type="checkbox"
          checked={typeFilter === "rock" ? true : false}
          onChange={() => setTypeFilter("rock")}
        />
        <Label>Pokémons Rock</Label>
      </ContainerFilters>
      <ContainerFilters>
        <Checkbox
          type="checkbox"
          onChange={() => setTypeFilter("steel")}
          checked={typeFilter === "steel" ? true : false}
        />
        <Label>Pokémons Steel</Label>
      </ContainerFilters>
      {typeFilter !== "" ? (
        <ContainerRemoveFilter>
          <LabelRemoveFilter
            onClick={() => {
              setTypeFilter("");
              props.filterProducts("");
            }}
          >
            Remover filtros
          </LabelRemoveFilter>
        </ContainerRemoveFilter>
      ) : null}
    </Container>
  );
}

export default connect(getProducts, (dispatch: any) => ({
  filterProducts: (type) => dispatch(filterProducts(type)),
}))(Filter);
