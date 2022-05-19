import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

    foodDetails = [
      {
        id:1,
        foodName:"Shawarma",
        foodDetails:"Pão sírio com carne bovina fatiada, tomate, cebola, cheiro verde, pepino e humus",
        foodPrice:15,
        foodImg:"https://curitibacult.com.br/wp-content/uploads/2018/04/shawarma-1.jpg"
      },
      {
        id:2,
        foodName:"Cholent",
        foodDetails:"Feijão fradinho, carne bovina seca em pedaços, linguiça bovina defumada e ovos cozidos",
        foodPrice:45,
        foodImg:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d1eabcfc-bf59-491e-8bfb-6bf9d644d4a1/Derivates/26c863ef-29e5-4017-8674-cbb0996a68cb.jpg"
      },
      {
        id:3,
        foodName:"Latkes",
        foodDetails:"Pastel frito de batata, com cebolinha, sal e alho",
        foodPrice:10,
        foodImg:"https://i.cbc.ca/1.3898020.1481819673!/fileImage/httpImage/potato-latkes.jpg"
      },
      {
        id:4,
        foodName:"Baba ganoush",
        foodDetails:"Pasta de berinjela com azeitonas pretas defumadas moídas. Acompanha porção de pão sírio",
        foodPrice:18,
        foodImg:"https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/babaganush-tradicional-babaganuge-17642.jpg"
      },
      {
        id:5,
        foodName:"Kneidlach",
        foodDetails:"Sopa de legumes com bolinhas de farinha de trigo sem fermento",
        foodPrice:22,
        foodImg:"https://s2.glbimg.com/aBBcJ52mjMyfa2Mj6G8JpNORpY4=/0x0:640x480/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/07/27/50/kneidelash.jpg"
      },
      {
        id:6,
        foodName:"Chalot",
        foodDetails:"Pão trançado coberto com sementes de gergelim",
        foodPrice:12,
        foodImg:"https://amopaocaseiro.com.br/wp-content/uploads/2021/08/yt-043_chala_receita-840x540.jpg"
      },
      {
        id:7,
        foodName:"Vinho Casher",
        foodDetails:"Vinho nacional Kosher Mevushal",
        foodPrice:25,
        foodImg:"https://62525.cdn.lojaquevende.com.br/static/62525/sku/produtos-judaicos-vinho-kosher-mevushal-aleph-tinto-suave--p-1630535473101.jpeg"
      }
    ]
  }
