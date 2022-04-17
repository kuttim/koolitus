let blogs = [
  {
    title: 'Title 1',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://f7.pmo.ee/_gr6rWTOvy0fTqE0mnPQ9rOndBU=/205x137/smart/nginx/o/2022/03/28/14451612t1he7af.jpg',
    url: 'https://www.postimees.ee/7487496/ida-viru-keskhaiglas-on-sojapogenike-visiitide-arv-neljakordistunud',
  },
  {
    title: 'Title 2',
    summary:
      'Fusce vestibulum nibh id odio sodales, sit amet placerat odio tincidunt.',
    image:
      'https://f9.pmo.ee/tWu8-sh3mKA7iVtgAT_mB-9sa_0=/205x137/filters:focal(2880x1149:3523x2021)/nginx/o/2022/03/28/14450516t1h03ca.jpg',
    url: 'https://maailm.postimees.ee/7487062/igor-taro-32-sojapaevast-vene-vaed-on-kiievi-ja-harkivi-asemel-valinud-uued-sihid#_ga=2.61126316.1816495235.1648463369-415208812.1648463369',
  },
  {
    title: 'Title 3',
    summary:
      'Maecenas et risus vel nibh molestie dictum vitae sed nulla',
    image:
      'https://www.artisoo.com/bmz_cache/2/2bb72f785f4dd3618701d279628ac19a.image.206x135.jpg',
    url: 'https://wallstreetjournal.postimees.ee/7487239/wsj-milline-on-sanktsioonide-moju-venemaa-140-miljardi-dollaristele-kullavarudele#_ga=2.137158448.1816495235.1648463369-415208812.1648463369',
  },
];

for (let i = 0; i < blogs.length; i++) {
  var blog = document.createElement('div');
  blog.className = 'blog-section';

  var title = document.createElement('h5');
  title.innerText = blogs[i].title;

  var image = document.createElement('img');
  image.className = 'article-image';
  image.src = blogs[i].image;

  var box = document.createElement('div');
  box.className = 'box';

  var summary = document.createElement('p');
  summary.innerText = blogs[i].summary;

  var url = document.createElement('a');
  url.setAttribute('href', [blogs[i].url]);
  url.setAttribute('target', '_blank');
  url.innerText = 'Loe edasi';

  blog.appendChild(image);
  blog.appendChild(box);
  box.appendChild(title);
  box.appendChild(summary);
  box.appendChild(url);
  document.getElementById('blogs').appendChild(blog);
}
