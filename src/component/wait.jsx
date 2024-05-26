import { ThreeDots as TDots } from 'react-loader-spinner';

export const Wait = () => {
  return (
    <div className='full-width full-height center-align'>
      <TDots
        visible={true}
        height={80}
        width={80}
        ariaLabel="loading-indicator"
        wrapperStyle={{}}
        wrapperClass="tdots-wrapper"
        color="#e15b64"
      />
    </div>
  );
};
