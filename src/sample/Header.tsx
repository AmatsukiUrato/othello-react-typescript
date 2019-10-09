import * as React from 'react';
import logo from '../logo.svg';

// Headerのpropsのtype aliasを定義
type HeaderProps = {
  text?: string;
}

// HeaderのLocalStateのtype aliasを定義
type HeaderState = {
  rotationSpeed: number;
}

// (1) React.Component型を用いる
// ジェネリクスの第1引数はprops、第2引数はLocalState
class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      rotationSpeed: 100,
    }
    this.changeRotationSpeed = this.changeRotationSpeed.bind(this);
  }

  changeRotationSpeed = () => {
    if (this.state.rotationSpeed > 1) {
      this.setState({
        rotationSpeed: this.state.rotationSpeed - 1
      })
    }
  }

  // (3) public アクセス修飾子
  public render() {
    return (
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={this.changeRotationSpeed}
          style={{
            animationDuration: `${this.state.rotationSpeed}s`
          }} />
        <h1 className="App-title">{this.props.text}</h1>
      </header>
    )
  }

}

export default Header;