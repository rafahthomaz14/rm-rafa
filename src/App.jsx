import './App.css'
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meses: 0,
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
      currentImageIndex: 0,
      images: [
        './src/img-1.png',
        './src/img-2.png',
        './src/img-3.png',
        './src/img-4.png',
        './src/img-5.png',
      ],
    };
  }

  componentDidMount() {
    this.calculateTimePassed();
    setInterval(() => {
      this.calculateTimePassed();
      this.changeImage();
    }, 1000);
  }

  calculateTimePassed() {
    const startDate = new Date("2022-08-13T00:00:00");
    const now = new Date();
    const diffInSeconds = Math.floor((now - startDate) / 1000);

    // Calcula meses
    const diffInMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();

    // Calcula dias, horas, minutos, e segundos restantes após meses
    const diffInDays = Math.floor(diffInSeconds / (60 * 60 * 24));
    const diffInHours = Math.floor(diffInSeconds / (60 * 60)) % 24;
    const diffInMinutes = Math.floor(diffInSeconds / 60) % 60;
    const diffInRemainingSeconds = diffInSeconds % 60;

    this.setState({
      meses: diffInMonths,
      dias: diffInDays,
      horas: diffInHours,
      minutos: diffInMinutes,
      segundos: diffInRemainingSeconds,
    });
  }

  changeImage() {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length
    }));
  }

  render() {
    const { images, currentImageIndex } = this.state;

    return (
      <div className="pagina">
        <video autoPlay muted loop id="bg-video">
          <source src="/src/video-1.mp4" type="video/mp4" />
        </video>
        <div className="img">
          <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
        </div>

        <div className="conteudo">
          <h1>Rafael e Monique</h1>

          <p>Oi, meu amor. Estou escrevendo esta mensagem para você ler todas as vezes que se sentir triste ou insegura, quero que volte aqui e lembre-se do quanto eu te amo, eo quanto você é importante para mim.<br></br>
            Você é meu porto seguro, minha paz, e a pessoa que me faz querer ser melhor a cada dia. Sou grato por cada momento que passamos juntos, e prometo sempre estar ao seu lado, seja para rir, apoiar, ou enfrentar qualquer desafio. Te amo muitaooo.</p>

        </div>

        <h2>Para você nunca se esquecer do tempo que estamos juntos ... </h2>

        <div className="btn-card">
          <h3>Meses</h3>
          <button>{this.state.meses}</button>
          <h3>Dias</h3>
          <button>{this.state.dias}</button>
          <h3>Horas</h3>
          <button>{this.state.horas}</button>
          <h3>Minutos</h3>
          <button>{this.state.minutos}</button>
          <h3>Segundos</h3>
          <button>{this.state.segundos}</button>
        </div><br />
        <p>Não quero desperdiçar a chance de ter encontrado você ... <br></br>
          Hoje, o que eu mais quero é fazer você feliz !</p>
        <p className='nome'><h4>Charlie Brown Jr.</h4></p>
      </div>
    );
  }
}

export default App;
