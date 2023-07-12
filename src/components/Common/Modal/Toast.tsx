'use client'

export const Toast = (props: any) => {
  return (
    <div className="toast-message-container">
      <div className="side-bar"></div>
      <div id="toast-message" className="toast-message">
        {/* Message to be added here */}
        {props.message}
      </div>
      <style jsx>{`
        
      .toast-message {
          color: 'black';
          background-color: #fff;
          padding: 15px 10px;
          border-radius: 4px;
        }
        .side-bar{
          padding: 10px;
          border-radius: 4px;
        }

        @keyframes SlideInOut {
          0%{
            transform: translateY(0);
            opacity:0;
          }
          30% {
            transform: translateY(-40px);
            opacity:1;
          }
          60% {
            transform: translateY(-40px);
            opacity:1;
          }
          100% {
            transform: translateY(0px);
            opacity:0;
          }
        }
        .toast-message-container {
          max-width: 200px;
          background: 'grey';
          box-shadow: 0px 0px 30px #1f1f1f;
          margin: 0px auto;
          border-radius: 4px;
          display: flex;
          animation: SlideInOut 3000s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export const ToastContainer = ( {duration, color, message, transitionPercentage}: any ) => {
  return (
    <div id="toast-container" className="toast-container">
      <Toast {... { duration, color, message, transitionPercentage}} />
      <style jsx>{`
        .toast-container {
          position: fixed;
          width: 100%;
          bottom: 20px;
          left: 0px;
        }
      `}</style>
    </div>
  )
}

// export const toast = {
//   remove: () => {
//     unmountComponentAtNode(document.getElementById('toast-container'))
//     toast.currentToast = false
//     if(toast.timeout){
//       clearTimeout(toast.timeout)
//       toast.timeout = null
//     }
//   },
//   currentToast: false,
//   timeout: null,
//   notify: ( message , options = null) =>{
    
//     let duration = 5
//     let color = 'grey'
//     if( options ){
//       if( options.duration)
//         duration = options.duration
//       if( options.type === "info") 
//         color = 'grey'
//       if( options.type === "success") 
//         color = 'green'
//       if( options.type === "error") 
//         color = 'red'
//       if( options.type === "warn") 
//         color = 'orange'
//     } 

//     if(toast.currentToast) { 
//       toast.remove()

//     }
//     let trasitionPercentage = 0.3*(100/duration)
//     render(<Toast 
//       message={message} 
//       slideIn={true} 
//       color={ color || null }
//       transitionPercentage={trasitionPercentage} 
//       duration={duration} />, document.getElementById('toast-container'));
//     toast.currentToast = true
//     toast.timeout = setTimeout( toast.remove, duration*1000)
//   }
// }