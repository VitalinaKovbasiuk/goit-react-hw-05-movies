import styled from '@emotion/styled';

export const Img = styled.img`
    margin-right: 15px;
`;

export const Item = styled.li`
     display: flex;

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const ImgNotFound = styled.div`
 display: flex;
    align-items: center;
    text-align: center;
    width: 100px;
    height: 150px;
    margin-right: 15px;
    background-color: #dddddd;
`;

export const List = styled.ul`
   padding: 0;
`;