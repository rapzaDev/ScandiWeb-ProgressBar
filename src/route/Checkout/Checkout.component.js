import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import ProgressBar from 'src/components/ProgressBar';


import './Checkout.extention.style';

class Checkout extends SourceCheckout {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }


    originalContent() {
        const { checkoutStep } = this.props;

        return(
            <>
                <ProgressBar checkoutStep={checkoutStep}/>
                <main block="Checkout">
                    <ContentWrapper
                    wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                    label={ __('Checkout page') }
                    >
                        { this.renderSummary(true) }
                        <div block="Checkout" elem="Step">
                            { this.renderTitle() }
                            { this.renderGuestForm() }
                            { this.renderStep() }
                            { this.renderLoader() }
                        </div>
                        <div>
                            { this.renderSummary() }
                            { this.renderPromo() }
                            { this.renderCoupon() }
                        </div>
                    </ContentWrapper>
                </main>
            </>
        )
    }


    render() {
        return (
            this.originalContent()
        )
    }
}

export default Checkout;