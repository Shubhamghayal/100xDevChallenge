export function VideoCard( props:any){
    return  <div className="p-3">
        <img src={props.thumb} className="rounded-xl"></img>
        <div className="grid grid-cols-12 bg-black-500 pt-2" >
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src={props.image}/>

            </div>
            <div className="col-span-11 pl-5">
                
                <div>{props.title}</div>
                <div className="text-base text-grey-600" > {props.auther}</div>
                <div className="text-base text-grey-600">{props.views} |{props.timestamp}</div>
                
            </div>
            

        </div>
    </div>
}

