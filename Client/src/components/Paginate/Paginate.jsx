import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextpage, backpage } from "../../redux/action"
import style from "./Paginate.module.css"

export default function Paginate({ cantPages }) {
    const { numPage } = useSelector(state => state)
    const dispatch = useDispatch()

    function next() {
        dispatch(nextpage())
    }
    // function back() {
    //     dispatch(backpage())
    // }

    // function number(n) {
    //     dispatch(handleNumber(n));
    // }

    return (
        // <div className={style.page}>
        //   {cantPages?.map((e, i) => (
        //     <button onClick={() => number(i + 1)}>{i + 1}</button>
        //   ))}
        // </div>
        <div className={style.page}>
            {
                numPage > 1 ? (<div>
                    <button onClick={() => dispatch(backpage())}>BACK</button>
                </div>
                ) : null
            }
            <p>{numPage - 1}</p>
            <p>{numPage}</p>
            <p>{numPage + 1}</p>
            {
                numPage <= cantPages ? (<div>
                    <button onClick={next}>NEXT</button>
                </div>
                ) : null
            }

        </div>
    )
}