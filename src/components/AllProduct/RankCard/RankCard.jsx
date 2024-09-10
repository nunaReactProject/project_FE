import React from 'react';
import './RankCard.style.css';

const RankCard = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>랭킹</th>
          <th>공연명</th>
          <th>기간/장소</th>
          <th>장르</th>
          <th>예매하기</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.mt20id} className='RankCard-tbody'>
            <td className='ranking_product_rank'>{product.rnum}</td>
            <td className='ranking_product_info'>
              <div className='table-cell'>
                <span className='image-container'>
                  <img src={`http://www.kopis.or.kr/${product.poster}`} alt={product.prfnm} />
                </span>
                <span>{product.prfnm}</span>
              </div>
            </td>
            <td className='ranking_product_sideinfo'>
              <span>{product.prfpd}</span>
              <br />
              <span>{product.prfplcnm}</span>
            </td>
            <td className='ranking_product_category'>{product.cate}</td>
            <td className='ranking_product_reserve button-container'>
              <button>예매하기</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankCard;
