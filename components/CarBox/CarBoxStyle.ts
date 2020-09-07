import styled from 'styled-components';

export const Div = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
  0 2px 2px rgba(0,0,0,0.1), 
  0 4px 4px rgba(0,0,0,0.1), 
  0 8px 8px rgba(0,0,0,0.1),
  0 16px 16px rgba(0,0,0,0.1);
`;

export const Title = styled.h3`
    color: #F62222;
    margin-bottom: 0;
`;

export const Year = styled.p`
    color: #989898;
    margin-top: 0;
    font-weight: 700;
    padding: 0;
`;

export const Img = styled.img`
    border-radius: 1rem;
    width: 90%;
    margin: 0 auto;
    margin-bottom: .9rem;
`;

export const Detail = styled.a`
    padding: .3rem .7rem;
    border-radius: 12px;
    margin-top: 2rem;
    background-color: #F62222;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
`;