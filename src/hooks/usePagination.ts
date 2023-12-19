import { useCallback, useState } from "react";
import {
  getProducts,
  useAsyncDispatch,
  useSearchResultSelector,
} from "../store";

interface Props {
  initialPage?: number;
  pageSize?: number;
  totalCount?: number;
  siblingCount?: number;
}
// TODO: redux middleware-ად ჯობია გადავიტანო
const usePagination = ({ initialPage = 1 }: Props) => {
  const { currentProductFilters } = useSearchResultSelector();
  const [currentPage, setCurrentPage] = useState(
    currentProductFilters.args.Page || initialPage
  );
  const dispatch = useAsyncDispatch();

  const goToPage = useCallback(
    async (page: number) => {
      setCurrentPage(page);
      await dispatch(
        getProducts({
          args: { ...currentProductFilters.args, Page: page },
        })
      );
      window.scrollTo(0, 0);
    },
    [dispatch, currentProductFilters]
  );

  return { currentPage, goToPage };
};

export default usePagination;
