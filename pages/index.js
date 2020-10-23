import MainLayout from '../components/MainLayout'
import BootstrapCarousel from '../components/BootstrapCarousel'

export default function Home({posts}) {
    return (
        <MainLayout title={'Home Page'} page="home">
            <div className="hero">
                <h1>Create wonders</h1>
            </div>
            <BootstrapCarousel/>
            <div className="posts pt-5 pb-5">
                <div className="container">
                    {posts.map(post => {
                        return (
                            <div className="card" key={post.id}>
                                {/*<img src="/assets/images/tech1.jpg" className="card-img-top" alt="Technology"/>*/}
                                <h2>{post.title}</h2>
                                <div className="card-body">
                                    <p className="card-text">{post.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

Home.getInitialProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_POSTS_API)
    const {data} = await res.json()
    return {posts: data}
}