import React from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import CartItem from "../../components/CartItem";
import Limit from "../../components/Limit";
import Pagination from "../../components/Pagination";

async function getProducts(limit, skip) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { next: { revalidate: 60 } } 
  );
  return res.json();
}

const ProductPage = async ({ searchParams }) => {
const limit = await searchParams
  console.log(limit);

  const skip = await searchParams
  console.log(skip);
  
  const data = await getProducts(limit.limit, skip.skip);
  const products = data.products || [];

  return (
    <section className="bg-white py-10">
      <Container>
        <h1 className="text-3xl font-semibold text-center mb-8">
          Product List
        </h1>

        {/* Limit */}
        <Limit />


        {/* Product List */}
        <Flex className="flex-wrap gap-4 justify-center">
          {products.length > 0 ? (
            products.map((prdct) => <CartItem key={prdct.id} data={prdct} />)
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </Flex>

        {/* Pagination */}
        <Pagination totalItems={data.total} currentSkip={skip} limit={limit} />

        <p className="text-center mt-5 text-gray-600">
          Showing {skip + 1}–{Math.min(skip + limit, data.total)} of {data.total} products
        </p>
      </Container>
    </section>
  );
};

export default ProductPage;
