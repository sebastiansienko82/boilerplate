import * as React from 'react';
export default class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }
    componentDidCatch(error: any, errorInfo: any) {
        const errorMessage = `${error} <${errorInfo.componentStack?.split('in ')[1]?.split(' (')[0]}>`;
        this.setState({errorMessage});
    }
    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        }
        return this.props.children;
    }
}
