import {React} from 'react'

function Universityranking() {
  

  return (
    <>
        <div className="edu-course-area edu-section-gap bg-color-white">
        <div className="container">
        Rankings
        <div className="blog-author-wrapper">
            <div className="thumbnail">
                <img src="/images/blog/author/author-medium/author-02.jpg" alt="Author Images" />
            </div>
            <div className="author-content">
                <h6 className="title">Global Ranking</h6>
                <p>1</p>  
            </div>
        </div>

        <div className="row text-center mt--60">
          <div className="col-lg-12">          
            <button 
            className="edu-btn"
            //onClick={ handleLoadMoreBtn }
            //disabled={ noMorePost ? 'disabled' : null }
            >
            <span>View All Ranking</span>
            </button>            
          </div>
        </div>

        
        

        </div>
        </div>
    </>
  )
}

export default Universityranking