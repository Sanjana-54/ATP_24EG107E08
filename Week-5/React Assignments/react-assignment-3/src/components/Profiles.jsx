import Profile from "./Profile"
function Profiles(){
    const profiles = [
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
      title: "News App using ReactJS Fetching XML RSS feed to JSON",
      description: "React app fetching RSS feed and displaying news content.",
      author: "Mukil Kecha",
      date: "Aug 11, 2020",
      authorImg: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      image: "https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg",
      title: "Medium like Blogging App Using Angular & Firebase",
      description: "Creating a blogging platform using Angular and Firebase.",
      author: "Mukil Kecha",
      date: "Aug 12, 2020",
      authorImg: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-0_aoFhFIjUbUCLoro0E9650wxJrVfkS0Q&s",
      title: "COVID-19 Tracker (Statistics) app Using Angular",
      description: "Track COVID statistics with charts and API integration.",
      author: "Mukil Kecha",
      date: "Aug 13, 2020",
      authorImg: "https://randomuser.me/api/portraits/men/13.jpg"
    }
  ]
return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-4">
        {profiles.map((profileObj,index)=>(
        <Profile key={index} profileObj={profileObj}/>
        ))}
    </div>
)
}
export default Profiles;