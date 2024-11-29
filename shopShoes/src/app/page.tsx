// app/page.tsx
import Filters from "@/components/Filters";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="flex">
      <Filters />
      <ProductList />
    </div>
  );
}
//rafce
