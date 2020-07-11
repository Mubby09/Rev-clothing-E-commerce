const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      id: 2,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 3,
      linkUrl: "shop/jackets"
    },
    {
      title: "Men",
      imageUrl:
        "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      id: 4,
      linkUrl: "shop/men"
    },
    {
      title: "Women",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      id: 5,
      linkUrl: "shop/women"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
