import { render } from '@testing-library/react';
import React from 'react';

class Carre extends React.Component {
    constructor(props) {
        super(props);

        // On définit un état afin de savoir si le carré est visible
        this.state = { isCarreVisible: true };
    }

    handleCarreVisibleClick() {
        this.setState = {isCarreVisible: true};
    }

    // dans le rendu
    render() {
        // Avant l'affichage on gère ...
        const isCarreVisible = this.state.isCarreVisisble;
        let elementCarre;

        // ... L'affichage (ou non) du carré
        // https://fr.reactjs.org/docs/conditional-rendering.html#element-variables
        if (isCarreVisible) {
            elementCarre = <div className="carre" ></div>;
        } else{
            elementCarre = null;
        }
        return (
            <div>
                {elementCarre}
                <button>On me voit</button>
                <button>rouge</button>
                <button>bleu</button>
            </div>
        );
    }

}

export default Carre;