import { darken, lighten } from "polished";
import styled from "styled-components";

import SvgEditIcon from "../../public/static/images/EditIcon";

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImgWrapper = styled.div`
  position: relative;
  width: 8.125rem;
  height: 8.125rem;
  object-fit: cover;
  margin-bottom: 0.8125rem;
  text-align: center;
  & img {
    border-radius: 50%;
  }
`;

export const EditButton = styled(SvgEditIcon)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  &:hover rect {
    fill: #000000;
  }
`;

export const ProfileBio = styled.p`
  height: 8.125rem;
  max-width: 34.0625rem;
  margin-top: 1.875rem;
  margin-left: 1.5rem;
  font-family: "Pretendard-Regular";

  color: #8d8c85;
  font-size: 1rem;
  line-height: 1.625rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
