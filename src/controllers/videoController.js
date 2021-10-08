let videos = [
  {
    title: "first video",
    rating: 4,
    comments: 2,
    createAt: "2 minutes ago",
    view: 1,
    id: 1,
  },
  {
    title: "second video",
    rating: 4,
    comments: 2,
    createAt: "2 minutes ago",
    view: 49,
    id: 2,
  },
  {
    title: "Third video",
    rating: 4,
    comments: 2,
    createAt: "2 minutes ago",
    view: 50,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
