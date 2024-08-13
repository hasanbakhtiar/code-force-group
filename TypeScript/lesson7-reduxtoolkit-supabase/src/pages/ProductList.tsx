import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { productType } from '../types/productType'
import { AppUseSelector } from '../tools/store'

const ProductList = () => {
  const productdata:any = AppUseSelector(p=>p);
  return (
    <div>
      <h1 className='text-center my-5'>Product List</h1>
      <Row className='g-5'>
        {productdata.map((item:productType,c:number)=>{

      return  <SingleCard allData={item} key={c} />
        })}

      </Row>
    </div>
  )
}

export default ProductList