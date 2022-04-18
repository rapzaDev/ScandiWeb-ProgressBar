import { PureComponent } from 'react';

import './styles.scss';

class ProgressBar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            billing: '',
            success: '',
            checkoutStepState: '',
        };
    }

    componentDidMount() {
        this.setState(() => ({
            checkoutStepState: this.props.checkoutStep,
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.checkoutStepState !==  this.props.checkoutStep) {

            if ( this.props.checkoutStep === 'BILLING_STEP' ) {
                this.setState(() => ({
                    checkoutStepState: this.props.checkoutStep,
                    billing: 'active',
                    success: '',
                }));    
            } else if ( this.props.checkoutStep === 'DETAILS_STEP' ) {
                this.setState(() => ({
                    checkoutStepState: this.props.checkoutStep,
                    success: 'active',
                }));    
            } 
        }
    }
    
    render() {

        return(
            <div className="progress-bar">
                <div className="shipping-bar" />
                <div className='shipping-info'>
                    <div className="shipping-number">
                        <span>1</span>
                    </div>
                    <span className="shipping-title">Shipping</span>
                </div>

                <div className={`billing-container ${this.state.billing}`}>
                    <div className={`billing-bar ${this.state.billing}`} />
                </div>
                <div className={`billing-info ${this.state.billing}`}>
                    <div className={`billing-number ${this.state.billing}`}>
                        <span>2</span>
                    </div>
                    <span className="billing-title">{'Review & Payments'}</span>
                </div>

                <div className={`success-container ${this.state.success}`}>
                    <div className={`success-bar ${this.state.success}`} />
                </div>
            </div>
        );
    }
};

export default ProgressBar;