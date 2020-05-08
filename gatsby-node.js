const { paginate } = require(`gatsby-awesome-pagination`);
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const query = `query allProducts {
        allContentfulProduct(filter: { image: { id: { ne: null } } }) {
          nodes {
            id
            title
            brewery
            price
            alcohol_percentage
          }
        }
      }`;
  const allProductsData = await graphql(query);
  const allProducts =  allProductsData.data.allContentfulProduct.nodes


  paginate({
    createPage,
    component: path.resolve(`./src/templates/productall.js`),
    items: allProducts,
    itemsPerFirstPage: 20,
    itemsPerPage: 20,
    pathPrefix: '/products/all',
    context: {
      total:allProducts.length,
    },
  })


  const allCategoriesQuery = `query AllCategories {
    allContentfulProductTag {
      distinct(field: title)
    }
  }`



  const otherCategoriesData = await graphql(allCategoriesQuery)
  const categories = otherCategoriesData.data.allContentfulProductTag.distinct;


  
  for (const category of categories) {
    const query = `query allProducts {
      allContentfulProduct(filter: {tags: {elemMatch: {title: {eq: "${category}"}}}}) {
        nodes {
          id
          title
          brewery
          price
          alcohol_percentage
        }
      }
    }`;

    const allProductsData = await graphql(query);
    const allProducts =  allProductsData.data.allContentfulProduct.nodes
    console.log(allProducts.length)
    paginate({
      createPage,
      component: path.resolve(`./src/templates/product.js`),
      items: allProducts,
      itemsPerFirstPage: 20,
      itemsPerPage: 20,
      pathPrefix: `/products/${category.split('/').join('').toLowerCase()}`,
      context: {
        total:allProducts.length,
        category:category
      },
    })
  }

  
};
