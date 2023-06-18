// import React, { ReactNode } from "react"

// class ErrorBoundary extends React.Component<{children: ReactNode}, {error: string | null}> {
//     constructor(props: {children: ReactNode}) {
//       super(props)
   
//       // Define a state variable to track whether is an error or not
//       this.state = { error: null }
//     }
//     static getDerivedStateFromError(error: Error) {
//       // Update state so the next render will show the fallback UI
   
//       return { hasError: true, error }
//     }
//     componentDidCatch(error: any , errorInfo: any) {
//       // You can use your own error logging service here
//       console.log({ error, errorInfo })
//     }
//     render() {
//       // Check if the error is thrown
//       if (this.state.hasError && this) {
//       }
   
//       // Return children components in case of no error
   
//       return this.props.children
//     }
// }

// export default ErrorBoundary;