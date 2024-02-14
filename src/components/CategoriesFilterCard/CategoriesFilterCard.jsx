import HomeProductRow from "../HomeProductRow/HomeProductRow";
import "./CategoriesFilterCard.module.css";

// eslint-disable-next-line react/prop-types
export default function CategoriesFilterCard({ selectedCat , categoriesTitle }) {
  return (
    <HomeProductRow
      isGray={false}
      title={categoriesTitle}
      categories={selectedCat}
    />
  );
}
