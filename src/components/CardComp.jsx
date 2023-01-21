import { Button } from 'react-bootstrap'
import {BiUser} from 'react-icons/bi'

const CardComp = () => {
  return (
    <div className="bg-white w-60 ">
        <div className="flex flex-col justify-center text-center">
            <BiUser className='text-center text-red-400 font-black text-5xl' />
            <div className=""></div>
            <Button variant=''>Vote</Button>
        </div>
    </div>
  )
}

export default CardComp