import React from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import "./style.css"

// styled components css
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerM = styled.div`
  display: flex;
  flex-direction: column;
  mask-image: linear-gradient(to left, transparent 0%, black 15%, black 99%);
  @media(max-width:600px){
    margin-left: -3.25em;
  }
`;

const Tcontent = styled(Link)`
  font-family: Bebas Neue;
  font-size: 14px;
  color: #000000;
  margin-left: 20px;
  margin-right: 20px;
  text-decoration:none;
  @media only screen (max-width: 375px) { 
    font-size: 16px;
  }
`;

const DesktopVisible = styled.div`
  display:none;
  @media(min-width:768px){
    display:block;
  }  
`;

const MobileVisible = styled.div`
  display:none;
  @media(max-width:767px){
    display:block;
  }  
`;

const CategorySelector = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProductTag {
        distinct(field: title)
      }
    }
  `)

  const categories = ['All', ...data.allContentfulProductTag.distinct]


  // rendering components
  return (
    <>
      <DesktopVisible>
        <Container>
          <ScrollMenu
            data={categories.map(category => (
              <Tcontent activeClassName="activeCategory" key={category} to={`/products/${category.split('/').join('').toLowerCase()}`}>{category}</Tcontent>
            ))}
          />
        </Container>
      </DesktopVisible>
      <MobileVisible>
        <ContainerM>
          <ScrollMenu
            data={categories.map(category => (
              <Tcontent activeClassName="activeCategory" key={category} to={`/products/${category.split('/').join('').toLowerCase()}`}>{category}</Tcontent>
            ))}
          />
        </ContainerM>
      </MobileVisible>
    </>
  );
};

export default CategorySelector;