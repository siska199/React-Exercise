/* eslint-disable eqeqeq */
import React from 'react'

export default function Pagi(props) {

    const pageNumbers = []

    let i 
    if(props.currentPage<=5){
        i = 1
    }
    else if((props.currentPage-1)%5==0){
        i = props.currentPage
    }else{
        i = props.currentPage- (props.currentPage)%5 +1
    }

    while(pageNumbers.length<5){
        pageNumbers.push(i)
        if(i==props.maxPage){
            break;
        }
        i = i+1

    }
    return (
        <nav>
            <ul className="pagination">
                <>
                    {
                        props.currentPage!=1&&(
                            <button onClick={props.preview}>Preview</button>
                        )
                    }
                </>
                {   
                   pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <a style={props.currentPage==number?{"color":"red"}:{"color":"black"}}  onClick={() => props.paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                   ))
                }
                {
                    props.maxPage!==props.currentPage &&
                    <button onClick={props.next}>Next</button>
                }

            </ul>
        </nav>
    )
}
