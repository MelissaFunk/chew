user = User.create(username: "melissafunk", password: "hello")

recipe1 = Recipe.create(link: "https://houseofyumm.com/best-ever-taco-meat/", favorite: false, status: "new", cuisine: "Mexican", user_id: 1, image: "https://houseofyumm.com/wp-content/uploads/2021/06/Taco-Meat-8-680x520.jpg", name: "Ground Beef Tacos")