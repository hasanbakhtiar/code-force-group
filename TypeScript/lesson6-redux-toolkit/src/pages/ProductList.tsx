import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'
import { productType } from '../types/productType'

const ProductList = () => {
  const productdata:any = useSelector(p=>p);
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