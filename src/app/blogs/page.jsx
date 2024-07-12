import Link from "next/link"
import blogCss from "../styles/blog.module.css"

const getPosts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    return await res.json()
}

const blogs = async () => {
    
    const posts = await getPosts()
    
    return (
        <>
            <div className="text-center mt-5">
                <h1>Blogs</h1>
            </div>
            <div className={blogCss.blog_section}>
                <div className="row">
                    {
                        posts.map((data) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 mt-3">
                                        <div className="card">
                                            <div className="card-img"></div>
                                            <div className="card-body">
                                                <Link href={`/blogs/${data.id}`}>
                                                    <h4>{data.title}</h4>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default blogs