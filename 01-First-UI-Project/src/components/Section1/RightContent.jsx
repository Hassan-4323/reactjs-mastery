import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.elem)
  return (
    <div id='right' className='h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto rounded-3xl'>
      
      {props.users.map(function(elem,idx){
        return <RightCard color = {elem.color} key = {idx} id ={idx} img = {elem.img} tag = {elem.tag} />
      })}
    </div>
  )
}

export default RightContent
