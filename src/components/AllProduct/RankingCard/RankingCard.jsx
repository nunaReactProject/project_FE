import React from 'react';
import * as S from './RankingCard.styled.js';

const RankingCard = ({ products }) => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>랭킹</S.Th>
          <S.Th>공연명</S.Th>
          <S.Th>기간/장소</S.Th>
          <S.Th>장르</S.Th>
          <S.Th>예매하기</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {products?.map((product) => (
          <S.Tr key={product.mt20id}>
            <S.Td className='ranking_product_rank'>{product.rnum}</S.Td>
            <S.Td className='ranking_product_info'>
              <S.TableCell>
                <S.ImageContainer>
                  <img src={`http://www.kopis.or.kr/${product.poster}`} alt={product.prfnm} />
                </S.ImageContainer>
                <span>{product.prfnm}</span>
              </S.TableCell>
            </S.Td>
            <S.Td className='ranking_product_sideinfo'>
              <span>{product.prfpd}</span>
              <br />
              <span>{product.prfplcnm}</span>
            </S.Td>
            <S.Td className='ranking_product_category'>{product.cate}</S.Td>
            <S.Td className='ranking_product_reserve'>
              <S.Button>예매하기</S.Button>
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export default RankingCard;
