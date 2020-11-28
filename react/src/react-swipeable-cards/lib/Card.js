/* eslint-disable */

exports.__esModule = true
exports.default = undefined

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _reactHammerjs = require('react-hammerjs')

const _reactHammerjs2 = _interopRequireDefault(_reactHammerjs)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`)
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  })
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
}

const Card = (function (_Component) {
  _inherits(Card, _Component)

  function Card(props) {
    _classCallCheck(this, Card)

    const _this = _possibleConstructorReturn(this, _Component.call(this, props))

    _this.state = {
      classList: ['card_container']
    }
    return _this
  }

  Card.prototype.componentDidMount = function componentDidMount() {}

  Card.prototype.onPan = function onPan(event) {
    if (this.props.isSwipeEnabled !== false) {
      if (
        (this.props.isLeftSwipeEnabled !== false && event.deltaX <= 0) ||
        (this.props.isRightSwipeEnabled !== false && event.deltaX >= 0)
      ) {
        this.state.classList.push('moving')
        if (event.deltaX === 0) return
        if (event.center.x === 0 && event.center.y === 0) return
        const xMulti = event.deltaX * 0.03
        const yMulti = event.deltaY / 80
        const rotate = xMulti * yMulti
        event.target.style.transform = `translate(${event.deltaX}px, ${event.deltaY}px) rotate(${rotate}deg)`
      }
    }
  }

  Card.prototype.onPanEnd = function onPanEnd(event) {
    if (this.props.isSwipeEnabled !== false) {
      if (
        (this.props.isLeftSwipeEnabled !== false && event.deltaX <= 0) ||
        (this.props.isRightSwipeEnabled !== false && event.deltaX >= 0)
      ) {
        const newClass = this.state.classList.filter(function (s) {
          return s !== 'moving'
        })
        this.setState({ classList: newClass })
        const moveOutWidth = document.body.clientWidth
        const keep = Math.abs(event.deltaX) < 300
        event.target.classList.toggle('removed', !keep)
        if (keep) {
          event.target.style.transform = ''
        } else {
          const endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth)
          const toX = event.deltaX > 0 ? endX : -endX
          const endY = Math.abs(event.velocityY) * moveOutWidth
          const toY = event.deltaY > 0 ? endY : -endY
          const xMulti = event.deltaX * 0.03
          const yMulti = event.deltaY / 80
          const rotate = xMulti * yMulti
          event.target.style.transform = `translate(${toX}px, ${toY + event.deltaY}px) rotate(${rotate}deg)`
          // DO SWIPE ACTIONS
          this.props.superOnSwipe()
          if (this.props.onSwipe) this.props.onSwipe(this.props.data)
          if (toX < 0 && this.props.onSwipeLeft) {
            this.props.onSwipeLeft(this.props.data)
          } else if (this.props.onSwipeRight) {
            this.props.onSwipeRight(this.props.data)
          }
        }
      }
    }
  }

  Card.prototype.onDoubleTap = function onDoubleTap() {
    if (this.props.onDoubleTap) this.props.onDoubleTap(this.props.data)
  }

  Card.prototype.render = function render() {
    return _react2.default.createElement(
      _reactHammerjs2.default,
      { onPan: this.onPan.bind(this), onPanEnd: this.onPanEnd.bind(this), onDoubleTap: this.onDoubleTap.bind(this) },
      _react2.default.createElement(
        'div',
        { className: this.state.classList.join(' '), style: this.props.style },
        this.props.children
      )
    )
  }

  return Card
})(_react.Component)

exports.default = Card
module.exports = exports.default
