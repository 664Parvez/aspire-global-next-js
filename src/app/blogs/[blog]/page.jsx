import singleBlogCss from "../../styles/singleBlog.module.css"

const getPost = async (blog) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${blog}`)
    return await res.json()
}

const blog = async ({params}) => {
    
    const {blog} = params

    const post = await getPost(blog)


    return (
        <>
            <div className={singleBlogCss.singleBlogPage}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className={singleBlogCss.singleBlogLeft}>
                            <div className="mt-4 text-start" id={singleBlogCss.title_section}>
                                <h5>Details Blog</h5>
                                <h1>{post.title}</h1>
                                <p>
                                    {/* Date */}
                                </p>
                            </div>
                            <div className={singleBlogCss.first_section}>
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        {/* Image */}
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                                <p>{post.body}</p>
                            </div>
                        </div>
                        </div>
                    <div className="col-lg-4">
                        <div className={singleBlogCss.singleBlogRight}>
                            <div className="card p-3">
                                <h4>{post.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default blog