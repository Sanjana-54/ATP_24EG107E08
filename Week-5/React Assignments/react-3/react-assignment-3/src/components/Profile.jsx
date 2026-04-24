function Profile(props){
    const {profileObj}=props;
    return(
        <div className="bg-white rounded-lg shadow">
            <img src={profileObj.image} alt="image unavailable" className="w-full h-40 rounded-t-lg" />
            <div className="p-4">
                <h3 className="font-extrabold">{profileObj.title}</h3>
                <p>{profileObj.description}</p>
                <div className="flex items-center gap-2 mt-4">
                    <img src={profileObj.authorImg} alt="image unavailable" className="w-6 h-6 rounded-full" />
                    <div>
                       <h3 className="text-sm">{profileObj.author}</h3> 
                       <h3>{profileObj.date}</h3> 
                    </div>
                </div>
 
            </div>
        </div>
    )
}
export default Profile;