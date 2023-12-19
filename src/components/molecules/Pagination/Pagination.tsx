import React from "react";
import usePagination from "../../../hooks/usePagination";
import { PaginationButton } from "../PaginationButton";
import { ReactComponent as ArrowRight } from "../../../assets/svg/single-arrow-right.svg";
import { IPaginationProps } from "./Pagination.types";
import { Stack } from "../../atoms/Stack";

const Pagination = ({ currentProductFilters }: IPaginationProps) => {
  const { currentPage, goToPage } = usePagination({});

  return (
    <Stack className="gap-2 justify-center pb-10">
      <PaginationButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowRight className="rotate-180" />
      </PaginationButton>
      <PaginationButton
        selected={currentProductFilters.args.Page === currentPage}
      >
        {currentPage}
      </PaginationButton>
      <PaginationButton
        onClick={() => goToPage(currentPage + 1)}
        selected={false}
      >
        <ArrowRight />
      </PaginationButton>
    </Stack>
  );
};

export default Pagination;
