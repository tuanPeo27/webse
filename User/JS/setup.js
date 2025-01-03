const phim = [
    {
        id: 1,
        name: 'Fast and furios 9',
        video: 'https://www.youtube.com/embed/1ZJ4eI0t1fA',
        image: '/img/movie/fastandfurious9.jpg',
        type:'Hành động',
        director: 'Justin Lin',
        performer: 'Vin Diesel, Michelle Rodriguez, Jordana Brewster',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 2,
        name: 'Avatar 2: The Way of Water',
        video: 'https://www.youtube.com/embed/d9MyW72ELq0',
        image: '/img/movie/avatar_2.jpg',
        type: 'Viễn tưởng',
        director: 'James Cameron',
        performer: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 3,
        name: 'Spider-Man: No Way Home',
        video: 'https://www.youtube.com/embed/JfVOs4VSpmA',
        image: '/img/movie/spiderman_nowayhome.jpg',
        type: 'Siêu anh hùng',
        director: 'Jon Watts',
        performer: 'Tom Holland, Zendaya, Benedict Cumberbatch',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 4,
        name: 'Parasite',
        video: 'https://www.youtube.com/embed/5xH0HfJHsaY',
        image: '/img/movie/parasite.jpg',
        type: 'Kinh dị, Hài',
        director: 'Bong Joon-ho',
        performer: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
        nation: 'Hàn Quốc',
        view: 0,
        evaluate: 0,
    },
    {
        id: 5,
        name: 'The Batman',
        video: 'https://www.youtube.com/embed/mqqft2x_Aa4',
        image: '/img/movie/the_batman.jpg',
        type: 'Hành động',
        director: 'Matt Reeves',
        performer: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 6,
        name: 'Interstellar',
        video: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        image: '/img/movie/interstellar.jpg',
        type: 'Khoa học viễn tưởng',
        director: 'Christopher Nolan',
        performer: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 7,
        name: 'Train to Busan',
        video: 'https://www.youtube.com/embed/pyWuHv2-Abk',
        image: '/img/movie/train_to_busan.jpg',
        type: 'Kinh dị',
        director: 'Yeon Sang-ho',
        performer: 'Gong Yoo, Ma Dong-seok, Jung Yu-mi',
        nation: 'Hàn Quốc',
        view: 0,
        evaluate: 0,
    },
    {
        id: 8,
        name: 'Inception',
        video: 'https://www.youtube.com/embed/YoHD9XEInc0',
        image: '/img/movie/inception.jpg',
        type: 'Khoa học viễn tưởng',
        director: 'Christopher Nolan',
        performer: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    },
    {
        id: 9,
        name: 'Your Name',
        video: 'https://www.youtube.com/embed/xU47nhruN-Q',
        image: '/img/movie/your_name.jpg',
        type: 'Anime',
        director: 'Makoto Shinkai',
        performer: 'Ryunosuke Kamiki, Mone Kamishiraishi',
        nation: 'Nhật Bản',
        view: 0,
        evaluate: 0,
    },
    {
        id: 10,
        name: 'The Godfather',
        video: 'https://www.youtube.com/embed/sY1S34973zA',
        image: '/img/movie/the_godfather.jpg',
        type: 'Tội phạm',
        director: 'Francis Ford Coppola',
        performer: 'Marlon Brando, Al Pacino, James Caan',
        nation: 'Mỹ',
        view: 0,
        evaluate: 0,
    }    
];

localStorage.setItem('phim', JSON.stringify(phim));
const quangcao = [
    {
        id: 1,
        image: '/img/advertising/banner1.jpg',
        link: 'https://www.youtube.com/watch?v=1ZJ4eI0t1fA',
    },
    {
        id: 2,
        image: '/img/advertising/banner2.jpg',
        link: 'https://www.youtube.com/watch?v=d9MyW72ELq0',
    },
    {
        id: 3,
        image: '/img/advertising/banner3.jpg',
        link: 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
    }
];
localStorage.setItem('quangcao', JSON.stringify(quangcao));