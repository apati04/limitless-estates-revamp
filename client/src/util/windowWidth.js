import React, { useState, useEffect } from 'react';
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   });

//   return class extends React.Component {
    
//   };
// }
// export default useWindowWidth;

function windowWidth(WrappedComponent) {
  
 return  class extends React.Component {
   state = {
     windowWidth: null,
   }
   handleResize = () => {
     this.setState({ windowWidth: window.innerWidth })
   }
   componentDidMount() {
     window.addEventListener('resize', this.handleResize);
   }
   componentWillUnmount() {
     window.removeEventListener('resize', this.handleResize);
   }
    render() {
      return (
        <WrappedComponent wWidth={this.state.windowWidth} {...this.props}/>
      );
    }
  }
}

export default windowWidth;