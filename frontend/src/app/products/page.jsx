"use client"
import { useState, useEffect, useContext } from 'react';
import UserContext from '@/context/UserContext';
import Categories from '@/components/Products/Categories';
import ProductCard from '@/components/Products/ProductCard';
import ProductsPaginate from '@/components/Products/ProductPaginate';

export default function ProductsPage() {
  const { user } = useContext(UserContext)
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1)
  const [paginate, setPaginate] = useState({});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedPage(1);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const fetchProducts = async () => {
    try {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;
      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }
      if (selectedPage) {
        url += selectedCategory ? `&page=${selectedPage}` : `?page=${selectedPage}`;
      }
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT'
        },
        credentials: 'include',
      });
      const data = await response.json();

      if (data.status === 'success') {
        setProducts(data.payload);
        setPaginate({
          totalPages: data.totalPages,
          prevPage: data.prevPage,
          nextPage: data.nextPage,
          page: data.page,
          hasPrevPage: data.hasPrevPage,
          hasNextPage: data.hasNextPage,
          prevLink: data.prevLink,
          nextLink: data.nextLink,
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Hubo un problema, intente más tarde');
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedPage]);

  return (
    <div className="container mainContainer">
      {message && (<div className="alert alert-danger" style={{ maxWidth: '500px', margin: '2rem auto' }}>{message}</div>)}
      {user && (<div className="alert alert-primary" style={{ maxWidth: '500px', margin: '2rem auto' }}> Bienvenido {user.first_name}, tu rol es {user.role}</div>)}

      <Categories selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />

      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>

      <ProductsPaginate paginate = {paginate} onPageChange={handlePageChange}/>
    </div>
  );
}