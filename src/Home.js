
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  // const [name,setName]=useState('bilal');

  // const Handledelete=(id)=>{
  //   const newBlog=blogs.filter((blog)=> blog.id !== id);
  //   setBlogs(newBlog);
  // }
  const {data:blogs,IsPending}=useFetch(' http://localhost:8000/blogs');
    return ( 
        <div className="home">
          {IsPending && <div> Loading... </div>}
           { blogs && <BlogList  blogs={blogs} title="All Blogs" />}
            {/* <BlogList  blogs={blogs.filter((blog)=>blog.author==='bilal')} title="Bilal's Blogs"/> */}

        </div>
     );
}
 
export default Home;