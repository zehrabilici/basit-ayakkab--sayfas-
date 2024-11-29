"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/constants";

const ProductList: React.FC = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [shoppingCardCount, setShoppingCardCount] = useState(0);

  const handleFavoriteChange = (id: number, isFavorite: boolean) => {
    if (isFavorite) {
      setFavoriteCount(favoriteCount + 1);
    } else {
      setFavoriteCount(favoriteCount - 1);
    }
  };

  const handleShoppingCardChange = () => {
    setShoppingCardCount(shoppingCardCount + 1);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="flex w-full h-20 border-b border-[#452D1C]">
        <div
          id="search"
          className="relative w-[80%] p-3 flex items-center justify-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-[50%] py-3 px-4 rounded-[2rem] border-none outline-none bg-[#2C2E30] text-white placeholder-[#535556]"
            maxLength={32}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div
            id="SearchIcon"
            className="absolute right-[25%] bg-[#2C2E30] py-3 px-7 border border-[#D2772D] rounded-[2rem] cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass text-[#D2772D]"></i>
          </div>
        </div>
        <div
          id="shoppingCard"
          className="w-[20%] p-3 flex items-center justify-center"
        >
          <i className="fa-solid fa-heart text-[#D2772D] m-2 border p-1 rounded-md border-[#D2772D] cursor-pointer relative">
            <div className="absolute right-[-10px] top-[-10px] text-[10px] bg-[#D2772D] rounded-[20px]  text-black h-4 w-4 text-center leading-[15px]">
              {favoriteCount}
            </div>
          </i>
          <i className="fa-solid fa-shopping-cart text-[#D2772D] m-2 border p-1 rounded-md border-[#D2772D] cursor-pointer relative">
            <div className="absolute right-[-10px] top-[-10px] text-[10px] bg-[#D2772D] rounded-[20px]  text-black h-4 w-4 text-center leading-[15px]">
              {shoppingCardCount}
            </div>
          </i>
          <i className="fa-solid fa-user text-[#D2772D] m-2 border p-1 rounded-md border-[#D2772D] cursor-pointer"></i>
        </div>
      </div>
      <div
        id="pagePath"
        className="flex items-center pl-10 w-full h-20 border-b border-[#452D1C] gap-4 "
      >
        <div className="underline">Home</div>
        <i className="fa-solid fa-caret-right text-[#FF6A08]"></i>
        <div className="underline">Shoes</div>
        <i className="fa-solid fa-caret-right text-[#FF6A08]"></i>
        <div>Men</div>
      </div>
      <div className="flex items-center pl-10 w-full h-20 text-3xl">Shoes</div>
      <div className="flex items-center pl-10 w-full h-20">
        <div className="cursor-pointer bg-[#2C2E30] py-3 px-5 mr-4 rounded-[30px] flex items-center justify-center">
          <div>Men</div>
          <div className="w-5 h-5 text-center leading-5 text-xl text-[#35312F] bg-[#FF8022] ml-2 rounded-[20px]">
            ×
          </div>
        </div>
        <div className="cursor-pointer bg-[#2C2E30] py-3 px-5 mr-4 rounded-[30px] flex items-center justify-center">
          <div>Nike</div>
          <div className="w-5 h-5 text-center leading-5 text-xl text-[#35312F] bg-[#FF8022] ml-2 rounded-[20px]">
            ×
          </div>
        </div>
        <div className="cursor-pointer bg-[#2C2E30] py-3 px-5 mr-4 rounded-[30px] flex items-center justify-center">
          <div>Adidas</div>
          <div className="w-5 h-5 text-center leading-5 text-xl text-[#35312F] bg-[#FF8022] ml-2 rounded-[20px]">
            ×
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center w-[1316px] mt-4 text-gray-600">
          Ürün bulunamadı.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onFavoriteChange={handleFavoriteChange}
              onClickedAddCardButton={handleShoppingCardChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
