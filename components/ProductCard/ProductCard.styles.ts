import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 266px;
  height: 266px;
  padding: 0px 24px 24px 24px;
`;

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 228px;
  background-color: ${(p) => p.theme.colors.contrast};
  border-radius: 24px;
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcons = styled(AiFillStar)`
  color: ${(p) => p.theme.colors.alt};
  width: 18px;
  height: 18px;
`;

export const StarRating = styled.span`
  margin-left: 3px;
  color: ${(p) => p.theme.colors.alt};
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
`;

export const SaleBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 28px;
  margin-top: 10px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 9px;
  color: ${(p) => p.theme.colors.contrast};
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  transform: rotate(10deg);
`;

export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
