import React, { useState } from "react";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState({
    categoryName: "",
    slug: "",
  });

  //  handle category input
  const handleCategoryInput = (e) => {
    let categoryInputInfo = { ...categoryInput };
    categoryInputInfo[e.target.name] = e.target.value;
    setCategoryInput(categoryInputInfo);
  };

  // handle create category
  const handleCreateCategory = (e) => {
    console.log(categoryInput);
    setCategoryInput({ categoryName: "", slug: "" });
    e.preventDefault();
  };
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
                name="categoryName"
                value={categoryInput.categoryName}
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
    </main>
  );
};

export default Category;
