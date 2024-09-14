import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RankingCard.styled.js';

const RankingCard = ({ products }) => {
  const navigate = useNavigate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th style={{ width: '10%' }}>랭킹</S.Th>
          <S.Th style={{ width: '40%' }}>공연명</S.Th>
          <S.Th style={{ width: '25%' }}>기간/장소</S.Th>
          <S.Th style={{ width: '10%' }}>장르</S.Th>
          <S.Th style={{ width: '15%' }}>예매하기</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {products?.map((product) => {
          const startDateStr = product.prfpd.split('~')[0];
          const startDate = new Date(startDateStr.replace(/\./g, '-'));

          return (
            <S.Tr key={product.mt20id}>
              <S.Td className='ranking_product_rank'>{product.rnum}</S.Td>
              <S.Td className='ranking_product_info'>
                <S.TableCell onClick={() => goToDetailPage(product.mt20id)} style={{ cursor: 'pointer' }}>
                  <S.ImageContainer>
                    <img src={`http://www.kopis.or.kr/${product.poster}`} alt={product.prfnm} />
                  </S.ImageContainer>
                  <span>{product.prfnm}</span>
                </S.TableCell>
              </S.Td>
              <S.RankingProductSideInfo>
                <span>{product.prfpd}</span>
                <br />
                <span>{product.prfplcnm}</span>
              </S.RankingProductSideInfo>
              <S.RankingProductCategory>{product.cate}</S.RankingProductCategory>
              <S.Td className='ranking_product_reserve'>
                {startDate > today ? (
                  <S.ReserveStatus>판매예정</S.ReserveStatus>
                ) : (
                  <S.ReserveButton type='button'>예매하기</S.ReserveButton>
                )}
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Tbody>
    </S.Table>
  );
};

export default RankingCard;
