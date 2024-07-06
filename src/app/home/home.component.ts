import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagePath = 'https://segredosdomundo.r7.com/wp-content/uploads/2020/04/como-estudar-em-casa-dicas-para-potenciar-seus-estudos-em-casa.jpg';
  imagemPath = 'https://tse3.mm.bing.net/th?id=OIP.QwI5pQ54jbACduIq1twahgHaE7&pid=Api&P=0&h=180'
  imagem = 'https://tomarposse.com.br/wp-content/uploads/2019/09/11-Super-Dicas-De-Estudo-Para-Colocar-Em-Pr%C3%A1tica-Agora.jpg'
}
