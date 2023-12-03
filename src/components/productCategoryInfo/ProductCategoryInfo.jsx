import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allCategories from '../../data/allCategories';


// icons 
import { RiSearch2Line, RiLayout2Fill, RiLayout5Fill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

// components
import Product from '../../components/global/product/Product'
import Sandwitchmenu from '../sandwitchMenu/Sandwitchmenu';

// css
import './productCategoryInfo.css'

// bannerData
import bannerDatas from '../../data/allBannersData'

export default function ProductCategoryInfo() {
  const [itemData, setItemData] = useState([])
  const [filteredItemData, setfilteredItemData] = useState([])
  const [filterType, setFilterType] = useState('all')
  const [bannerData, setBannerData] = useState(null)
  const [search, setSearch] = useState("")
  const [searchCross, setSearchCross] = useState(false)
  const { categoryInfo } = useParams();


  useEffect(() => {
    const matchingObjects = allCategories.flatMap(category => category).filter(obj => obj.category === categoryInfo);

    function removeDuplicates(arr, identifier) {
      const uniqueMap = {};
      const uniqueArray = [];

      for (const item of arr) {
        const key = item[identifier];

        if (!uniqueMap[key]) {
          uniqueMap[key] = true;
          uniqueArray.push(item);
        }
      }

      return uniqueArray;
    }

    const uniqueArray = removeDuplicates(matchingObjects, `id`);

    let sortedProducts = [...uniqueArray];

    if (filterType === 'asc') {
      sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice); // Sort by price low to high
    } else if (filterType === 'dsc') {
      sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice); // Sort by price high to low
    } else if (filterType === 'popular') {
      sortedProducts.sort((a, b) => b.rating - a.rating); // Sort by popularity
    }

    setfilteredItemData(sortedProducts);

    setItemData(sortedProducts);

    const bannerData = bannerDatas.find(data => data.category === categoryInfo);
    setBannerData(bannerData)

  }, [filterType, categoryInfo])

  const restoreData = () => {
    setfilteredItemData(itemData)
    setSearch("")
    setSearchCross(false)
  }

  const searchHandler = () => {
    const searchData = itemData.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
    setfilteredItemData(searchData)
    setSearchCross(true)
  }
  console.log("search", search)


  const sandwitchMenuLinks = [
    {
      lable: 'back to shop',
      linkTo: "/",
      active: false
    },
    {
      lable: 'categories',
      linkTo: "/products",
      active: false,
    },
    {
      lable: categoryInfo,
      linkTo: "/products",
      active: true,
    },
  ]
  return (
    <div className='productCategoryInfo'>
      <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />
      <div className="productCategoryInfoBanner" style={{ backgroundImage: `url(${bannerData && bannerData.categoryInfoBannerImg})` }}>
        <div className="productCategoryInfoBannerInfo">
          <div className='productCategoryInfoBannerInfoTitle'>
            <h1>{bannerData && bannerData.categoryInfoTitle}</h1>
            <span>{bannerData && bannerData.categoryInfoSubTitle}</span>
          </div>
          <div className="productCategoryInfoBannerInfoInputBox">
            <input type="text" value={search} placeholder="what's in your mind?" onChange={(e) => setSearch(e.target.value)} />
            <button style={{ fontSize: "20px" }} >
              {
                searchCross ? <RxCross2 onClick={restoreData} /> : <RiSearch2Line onClick={searchHandler} />
              }
            </button>
          </div>
        </div>
      </div>
      <div className="productCategoryInfoFiltersAndLayout">
        <div className='itemFoundsAndFilters'>
          <span>{filteredItemData && filteredItemData.length} items found  |</span>
          <div className="productCategoryInfoFilter">
            <span>sort by:</span>
            <select name="" id="" onChange={(e) => setFilterType(e.target.value)} >
              <option value="all">all</option>
              <option value="asc">price low to high</option>
              <option value="dsc">price high to low</option>
              <option value="popular">popular items</option>
            </select>
          </div>
        </div>
        <div className="rowAndBoxLayout">
          <span>view</span>
          <div className="productCategoryInfoLayout">
            <RiLayout2Fill className='active' />
            < RiLayout5Fill />
          </div>

        </div>
      </div>
      <div className="productCategoryInfoProducts">
        {
          filteredItemData.map((data, index) => <Product key={index} data={data} />)
        }
      </div>
    </div>
  );
}
