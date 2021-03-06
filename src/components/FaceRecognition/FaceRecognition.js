import React from "react";
import './FaceRecognition.css';
const FaceRecognition=({imgUrl,boxes})=>{
return <div className={'center ma'}>
    <div className={"mt2 absolute"}>
        <img id={'inputImage'} src={imgUrl} alt={""} width={'500'} height={'auto'}/>
        {boxes.map(box=>(<div className={'bounding-box'} style={{top:box.rowTop,left:box.columnLeft,right:box.columnRight,bottom:box.rowBottom}}/>
        ))}
    </div>
</div>


};
export default FaceRecognition;