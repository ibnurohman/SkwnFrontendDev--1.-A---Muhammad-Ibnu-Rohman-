import React, { useEffect, useState } from 'react';
import { ConfigHome } from '../api/service/Home/ConfigHome';

const CategorySection = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Living Room');

  const fetchData = async () => {
    try {
      const response = await ConfigHome.getHomeByCategory();
      setData(response || []);
    } catch (error) {
      console.error('Error fetching photo:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [...new Set(data.map(item => item.category))];
  const filtered = data.filter(item => item.category === activeCategory);

  return (
    <section className="bg-white py-14 px-6 md:px-20">
      <div className="flex flex-col md:flex-row-reverse items-start gap-10">
        <div className="w-full md:w-2/5">
          <h3 className="text-center md:text-left text-lg text-[#2F241F] mb-1">Categories</h3>
          <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold text-[#2F241F] mb-6 leading-snug">
            Furniture Sets<br />Recommendations
          </h2>

          <div className="bg-[#FCFAFA] rounded-xl p-4 flex flex-col gap-2">
            {categories.map(cat => (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl p-4 cursor-pointer transition-all ${
                  cat === activeCategory ? 'bg-[#E5F0B6]' : 'hover:bg-gray-100'
                }`}
              >
                <h4 className="font-semibold text-gray-800">{cat}</h4>
                {cat === activeCategory && (
                  <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                    Enjoy a great {cat.toLowerCase()} aesthetics with your family{'\n'}
                    Designs created for increased comfortability
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full md:w-3/5">
          {filtered.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`Furniture - ${item.category}`}
              className="w-[180px] h-[260px] md:w-[220px] md:h-[350px] object-cover rounded-2xl flex-shrink-0 shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
