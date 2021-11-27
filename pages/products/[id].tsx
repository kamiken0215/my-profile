import { getAllProducts, getProductData } from "../../libs/product";
import { GetStaticProps, GetStaticPaths } from "next";
import { ProductParams, ProductProps } from "../../models/product";

export const getStaticProps: GetStaticProps<ProductProps, ProductParams> =
  async ({ params }) => {
    const product = await getProductData(params!.id);

    return {
      props: {
        product,
      },
    };
  };

export const getStaticPaths: GetStaticPaths<ProductParams> = async () => {
  const products = await getAllProducts();
  const paths = products.contents.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Products: React.VFC<ProductProps> = ({ product }) => {
  return <div>{product.content}</div>;
};

export default Products;
