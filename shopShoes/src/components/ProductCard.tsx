"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isFavorite: boolean;
}

interface ProductCardProps {
  product: Product;
  onFavoriteChange: (id: number, isFavorite: boolean) => void;
  onClickedAddCardButton: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onFavoriteChange,
  onClickedAddCardButton,
}) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  function handleFavoriteChange() {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    onFavoriteChange(product.id, newIsFavorite);
  }

  return (
    <div className="relative w-full bg-[#2D2E30] py-4 px-8 m-2 rounded-[1rem]">
      <div
        className="absolute right-5 text-[20px] cursor-pointer"
        onClick={handleFavoriteChange}
      >
        {isFavorite ? (
          <i className="fa-solid fa-heart text-[#EF680C]"></i>
        ) : (
          <i className="fa-regular fa-heart text-[#EF680C]"></i>
        )}
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain"
      />
      <h3 className="mt-2 font-bold">{product.name}</h3>
      <div className="text-[#737576] mt-2 text-[15px]">Size: 40-46</div>
      <div className="flex items-center justify-between">
        <p className="text-orange-500 text-[22px] font-bold">{product.price}</p>
        <button
          onClick={onClickedAddCardButton}
          className=" bg-orange-500 text-white px-4 py-2 rounded"
        >
          Sepete ekle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
