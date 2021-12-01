import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pagi from './Pagi'
export default function Pagination() {
    const postsPerPage = 12
    const [posts, setPosts]= useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPagination, setTotalPagination] = useState(5)
    const [maxPage, setMaxPage] = useState(0)
    useEffect(()=>{
        fetchPosts()
    },[])

    const fetchPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setMaxPage(Math.ceil(res.data.length/postsPerPage))
        if(res.data.length<=60){
            setTotalPagination(Math.ceil(res.data.length/postsPerPage))
        }
        console.log("Res", res.data)
      };
    //Get Current Posts:
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const preview = ()=>{
        const page = currentPage-1
        setCurrentPage(page)
    }
    const next = ()=>{
        const page = currentPage+1
        setCurrentPage(page)
    }
    return (
        <div>
            {
                currentPosts.map((post,i)=>(
                    <div key={i}>
                        {post.title}
                    </div>
                ))
            }
            <Pagi maxPage={maxPage}  next={next} preview ={preview} currentPage={currentPage} totalPagination={totalPagination} paginate={paginate} />
        </div>
    )
}
