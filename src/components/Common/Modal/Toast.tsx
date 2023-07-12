'use client'

export const Toast = (props: any) => {
  return (
    <div className="toast-message-container">
      <div className="side-bar"></div>
      <div id="toast-message" className="toast-message">
        {/* Message to be added here */}
        {props.message}
      </div>
    </div>
  )
}

export const ToastContainer = ({ duration, color, message, transitionPercentage }: any) => {
  return (
    <div id="toast-container" className="toast-container">
      <Toast {... { duration, color, message, transitionPercentage }} />
    </div>
  )
}
