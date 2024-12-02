import React, { useEffect, useState } from "react";
import { useCreateCategoryMutation, useGetCategoriesQuery } from "../../redux/apiSlice";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState({
    name: "",
    slug: "",
  });
  const [createCategory,{ data, isSuccess, isLoading, isError, error }] = useCreateCategoryMutation()
  const { data:isData, isLoading:isLoad } = useGetCategoriesQuery()
  //  handle category input
  const handleCategoryInput = (e) => {
    let categoryInputInfo = { ...categoryInput };
    categoryInputInfo[e.target.name] = e.target.value;
    setCategoryInput(categoryInputInfo);
  };

  // handle create category
  const handleCreateCategory = (e) => {
    createCategory(categoryInput);
    setCategoryInput({ name: "", slug: "" });
    e.preventDefault();
  };
  useEffect(()=>{
    console.log(isData);
    
  },[isData])
  return (
    <main>
      <div>
        <h2>Create Category</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="name"
                value={categoryInput.name}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Slug
              </label>
              <input
                type="text"
                placeholder="Enter Slug"
                name="slug"
                value={categoryInput.slug}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateCategory}>Create Category</button>
            </div>
          </div>
        </form>
      </section>
      {
        isLoad ? <p>Loading...................</p> :isData?.data.map(({name})=>(
          <p>{name}</p>
        ))
      }
    </main>
  );
};

export default Category;
