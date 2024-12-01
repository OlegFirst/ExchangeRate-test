import './ImageBlock.scss';

const ImageBlock = () => (
  <div className='ImageBlock'>
		<div className='ImageBlock__Circle' />
	
    <img 
      className='ImageBlock__Image'
      src='images/exchange.jpg'
      width='80'
      height='80'
      alt='bg' 
    />
		
		<div className='ImageBlock__Circle' />
  </div>
);

export default ImageBlock;