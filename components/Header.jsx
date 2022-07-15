import React, { useContext, useState, useEffect } from "react";
import { getCategories } from "../services";

import Link from "next/link";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    func();
    async function func() {
      const result = await getCategories();
      setCategories(result);
    }
  }, []);

  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-blod text-4xl text-white">
              Graph CMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
