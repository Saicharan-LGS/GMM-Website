import {Component} from 'react'

import './index.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'



class DoubtItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answer} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answer}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const Image = isActive ? AiOutlineMinusCircle : AiOutlinePlusCircle
  

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <Image className="doubt-image" />
      </button>
    )
  }
  render() {
    const {faqDetails} = this.props
    const {question} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{question}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default DoubtItem
