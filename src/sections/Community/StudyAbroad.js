import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PaginationOne from "../../components/pagination/PaginationOne";
import SearchOne from "../../components/widgets/blog/SearchOne";
import CategoryOne from "../../components/widgets/blog/CategoryOne";
import LatestPostOne from "../../components/widgets/blog/LatestPostOne";
import TagOne from "../../components/widgets/blog/TagOne";
import BannerOne from "../../components/widgets/blog/BannerOne";
import PostOne from "../../components/post/PostOne";
import PostData from "../../data/blog/PostData.json";
import AboutOne from "../../components/widgets/blog/AboutOne";
import BlogDetailsOne from "./BlogDetailsOne";
import { FaSpinner } from "react-icons/fa";
import Reviews from "./Reviews";

const StudyAbroad = () => {
  const [getAllItems] = useState(PostData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [noMorePost, setNoMorePost] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleLoadMoreBtn = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount >= getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
    }
  };

  return (
    <>
      <SEO title="Study Abroad" />
      <Layout>
        <BreadcrumbOne
          title="Blog Grid With Left Sidebar"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Study Abroad"
        />

        <div className="edu-elements-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 order-2">
                {/* <div className="row g-5">
                                    { 
                                        PostData.slice( 0, 12 ).map((item) => (
                                            <div className="col-lg-6 col-md-6 col-12" key={ item.id }>
                                                <PostOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </div> */}
                <div className="row">
                  <div className="col-lg-12 mt--60">
                    <PaginationOne />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <aside className="edu-blog-sidebar">
                  <AboutOne />
                </aside>
              </div>
              <div className="col-lg-7">
                <aside className="edu-blog-sidebar">
                  <BlogDetailsOne/>
                  <Reviews/>
                  {/* <TagOne extraClass="mt--50" style2="enable" /> */}
                </aside>
                <div className="row text-center mt--60">
                  <div className="col-lg-12">
                    <button
                      className="edu-btn"
                      onClick={handleLoadMoreBtn}
                      disabled={noMorePost ? "disabled" : null}
                    >
                      {noMorePost ? (
                        "All Posts Displayed"
                      ) : (
                        <span>
                          Load More
                          <span className="eduvibe-spin-icon">
                            <FaSpinner />
                          </span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <aside className="edu-blog-sidebar">
                  <SearchOne style2="enable" />
                  <CategoryOne extraClass="mt--50" style2="enable" />
                  <LatestPostOne extraClass="mt--50" style2="enable" />

                  <TagOne extraClass="mt--50" style2="enable" />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StudyAbroad;
