import React from "react";
import path from "path";
import fs from "fs";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    if (!product) return null;
    return (
        <>
        <Layout parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};

// Static paths for cPanel / static export (reads local JSON at build time)
export async function getStaticPaths() {
    const jsonPath = path.join(process.cwd(), "public/static/product.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const paths = data.map((p) => ({ params: { slug: p.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const jsonPath = path.join(process.cwd(), "public/static/product.json");
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const index = findProductIndex(data, params.slug);
    const product = index >= 0 ? data[index] : null;
    return { props: { product } };
}

export default ProductId;
