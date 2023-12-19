import React from "react";
import SearchButton from "../SearchButton/SearchButton";
import { useTranslation } from "react-i18next";
import { ISidebarFooterProps } from "./SidebarFooter.types";
import Container from "../../atoms/Container/Container";

const SidebarFooter = ({ handleSearchSubmit }: ISidebarFooterProps) => {
  const { t } = useTranslation();

  return (
    <Container variant="sidebarFooter">
      <SearchButton onClick={handleSearchSubmit}>{t("SEARCH")}</SearchButton>
    </Container>
  );
};

export default SidebarFooter;
