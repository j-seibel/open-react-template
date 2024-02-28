import React, { RefObject } from 'react';
import Typed from 'typed.js';

'use '
interface TypedReactHeaderProps {
  strings: string[];
}

interface TypedReactHeaderState {
  typed?: Typed;
}

class TypedReactHeader extends React.Component<TypedReactHeaderProps, TypedReactHeaderState> {
  private el: RefObject<HTMLSpanElement> = React.createRef();

  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };

    if (this.el.current) {
      this.setState({ typed: new Typed(this.el.current, options) });
    }
  }

  componentWillUnmount() {
    if (this.state.typed) {
      this.state.typed.destroy();
    }
  }

  //is c

  render() {
    return (
      <div className="wrap">
        <h1>Typed.js</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={this.el}
          />
        </div>
        <button onClick={() => this.state.typed?.toggle()}>Toggle</button>
        <button onClick={() => this.state.typed?.start()}>Start</button>
        <button onClick={() => this.state.typed?.stop()}>Stop</button>
        <button onClick={() => this.state.typed?.reset()}>Reset</button>
        <button onClick={() => this.state.typed?.destroy()}>Destroy</button>
      </div>
    );
  }
}

export default TypedReactHeader;
