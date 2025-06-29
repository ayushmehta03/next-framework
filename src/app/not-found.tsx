import Image from "next/image"
import { title } from "process"
export const metadata={
    title:"Page Not Found",
}
export default function NotFound(){
    return(
        <div className="px-2 2-full ">
            <div className="mx-auto py-4 flex-col justify-center items-center gap-4">
      <h2> Page Not Found</h2>
        <Image 
        className="m-0 rounded-xl "
        src="/images/not-found.png"
        width={300}
        height={300}
        sizes="300px"
        alt="Page Not Found"
        priority={true}
        title="Page Not Found" />
    </div>
        </div>
    )
}