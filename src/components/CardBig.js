import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/CardBig.scss'
class CardBig extends Component {  
    render() {
        return (
            <div className="cardBig">
                <div className="infoEnterpriseBig" >
                    <img src={this.props.imgEnterpriseBig} className="imgEnterpriseListBig"/>
                    <div className="textEnterprise">{this.props.textEnterprise}</div>
                </div>
            </div>
        );
    }
}

export default CardBig;