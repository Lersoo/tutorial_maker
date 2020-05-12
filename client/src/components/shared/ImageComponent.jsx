import React, { Component } from 'react'


class ImageComponent extends Component {
  state = {
    isOpened: false
  }

  toggleModal = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    return (
      <div>
        {!this.state.isOpen ? (
          <img
            className="small"
            src={this.props.src}
            onClick={this.toggleModal}
            alt={this.props.alt}
            width='500px'
          />
        ) : (
            <dialog
              className="dialog"
              style={{ position: 'absolute' }}
              open
              onClick={this.toggleModal}
            >
              <img
                className="image"
                src={this.props.src}
                onClick={this.toggleModal}
                alt={this.props.alt}
              />
            </dialog>
          )
        }
      </div>
    )
  }
}

export default ImageComponent;