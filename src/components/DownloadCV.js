import React from "react"
import pdf from "../Erik_Rudhe_CV.pdf"

const DownloadCV = (props)=>{
    console.log(typeof(props))
    return(
        <div className = "App">
        <a href = {pdf} target = "_blank">Download CV</a>
      </div>
    )
}

export default DownloadCV