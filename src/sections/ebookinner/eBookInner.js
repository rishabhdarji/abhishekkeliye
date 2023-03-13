import React from 'react'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import Layout from '../../common/Layout'

import SEO from '../../common/SEO'

import EbookInnerBaner from './ebookinnerbaner'


const EBookInner = () => {
  return (
    <>
    <SEO title="Courses Filter Sidebar" />
            <Layout>
                <BreadcrumbOne 
                   // title="Study Abroad eBooks"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="eBooks"
                />
                  <EbookInnerBaner />
                  


               
            </Layout>
    
</>
  )
}

export default EBookInner