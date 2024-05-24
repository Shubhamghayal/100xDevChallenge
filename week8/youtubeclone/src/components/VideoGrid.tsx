import { VideoCard } from "./VideoCards"

const Videos=[{title:"hoe to lears driving",
image:'./t.png',
thumb:"./photo.png",
auther:"hsubham ghayal",
views:100,
timestamp:"kbsvalkj",

},
{title:"hoe to lears driving",
image:'./t.png',
thumb:"./photo.png",
auther:"hsubham ghayal",
views:100,
timestamp:"kbsvalkj",

},
{title:"hoe to lears driving",
image:'./t.png',
thumb:"./photo.png",
auther:"hsubham ghayal",
views:100,
timestamp:"kbsvalkj",

},
{title:"hoe to lears driving",
image:'./t.png',
thumb:"./photo.png",
auther:"hsubham ghayal",
views:100,
timestamp:"kbsvalkj",

}]


export const VideoGrid=()=>{
    return( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(video=>{
                return <div>
                    <VideoCard  title={video.title}
      image={video.image}
      thumb={video.thumb}
      auther={video.auther}
      views={video.views}
      timestamp={video.timestamp}
      />
                </div>
            })
        }
    </div>)
}